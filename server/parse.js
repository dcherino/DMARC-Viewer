/**
 * React Dmarc Sift. DAG's 'Parse' node implementation
 */
"use strict";

// Javascript nodes are run in a Node.js sandbox so you can require dependencies following the node paradigm
// e.g. var moment = require('moment');

// Entry point for DAG node
module.exports = function (got) {
  // inData contains the key/value pairs that match the given query
  const inData = got.in;

  console.log("email-sift-web: parse.js: running...");

  const results = inData.data.map(({ value: valueBuffer }) => {
    // Parse the JMAP information for each message more info here: https://docs.redsift.com/docs/server-code-jmap
    const emailJmap = JSON.parse(valueBuffer);
    const {
      id,
      threadId,
      hasAttachment,
      headers,
      isUnread,
      from,
      cc,
      bcc,
      subject,
      date,
      preview,
      textBody,
      strippedHtmlBody,
    } = emailJmap;

    // Headers
    const dkimHeader = headers["Authentication-Results"]
      ? headers["Authentication-Results"].match(/(dkim=)\w+/g)
      : null;
    const spfHeader = headers["Authentication-Results"]
      ? headers["Authentication-Results"].match(/(spf=)\w+/g)
      : null;

    const dkim = Array.isArray(dkimHeader) ? dkimHeader[0].split("=")[1] : dkimHeader;
    const spf = Array.isArray(spfHeader) ? spfHeader[0].split("=")[1] : dkimHeader;

    const headerData = {
      DKIM: dkim,
      SPF: spf,
    };

    // Not all emails contain a textBody so we do a cascade selection
    const body = textBody || strippedHtmlBody || "";
    const wordCount = countWords(body);

    const key = `${threadId}/${id}`;
    const value = {
      id,
      hasAttachment,
      isUnread,
      from,
      cc,
      bcc,
      subject,
      date,
      preview,
      body,
      headerData,
      threadId,
      wordCount,
    };

    // Emit into "messages-st" store so count can be calculated by the "Count" node
    // Emit information on the "messages" output so we can display them in the email list and detail
    return [
      {
        key,
        value,
        name: "messages-st",
      },
      {
        key,
        value,
        name: "messages",
      },
    ];
  });

  // Possible return values are: undefined, null, promises, single or an array of objects
  // return objects should have the following structure
  // {
  //   name: '<name of node output>',
  //   key: 'key1',
  //   value: '1'
  // };
  return [].concat(...results);
};

/**
 * Simple function to count number of words in a string
 */
function countWords(body) {
  let s = body.replace(/\n/gi, " ");
  s = s.replace(/(^\s*)|(\s*$)/gi, "");
  s = s.replace(/[ ]{2,}/gi, "");
  return s.split(" ").length;
}
