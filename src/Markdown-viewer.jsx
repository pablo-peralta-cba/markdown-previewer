import { useState, useEffect } from "react";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {marked} from "marked";  // Import the marked library

export default function MarkdownViewer({ markdown }) {  // Destructure markdown prop
  const [htmlContent, setHtmlContent] = useState(""); // State to store the converted HTML

  useEffect(() => {
    const htmlText = marked(markdown);  // Use marked to convert markdown to HTML
    setHtmlContent(htmlText);  // Update the state with the converted HTML
  }, [markdown]); // Re-run the effect when markdown changes

  return (
    <div id="preview" className="well" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
  );
}


