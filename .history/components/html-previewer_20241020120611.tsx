"use client"; 

import React, { useState, ChangeEvent } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { predefinedHtml } from "./predefinedHtml";

export default function HTMLPreviewComponent() {

  const [htmlCode, setHtmlCode] = useState<string>("");
  const [previewHtml, setPreviewHtml] = useState<string>("");

  const handlePreview = (): void => {
    setPreviewHtml(htmlCode);
  };


  const handlePasteHtml = (): void => {
    setHtmlCode(predefinedHtml);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setHtmlCode(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* HTML Previewer Card */}
      <div className="w-full max-w-2xl p-8 rounded-lg shadow-2xl bg-gray-800 border border-gray-700 transition-all hover:border-blue-500 hover:shadow-blue-500/50">
        <h1 className="text-4xl font-extrabold text-center text-gradient bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          HTML Previewer
        </h1>
        <p className="text-gray-400 mb-6 text-center">
          Enter your HTML code and see the real-time preview.
        </p>

        <div className="grid gap-6">
          {/* Textarea for entering HTML code */}
          <Textarea
            value={htmlCode}
            onChange={handleChange}
            placeholder="Enter your HTML code here..."
            className="p-4 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            rows={10}
          />

          {/* Buttons for Generate Preview and Paste HTML */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={handlePreview}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:bg-gradient-to-l hover:shadow-purple-500/50 transition-all"
            >
              Generate Preview
            </Button>
            <Button
              onClick={handlePasteHtml}
              className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-green-500/50 transition-all"
            >
              Paste HTML
            </Button>
          </div>

          {/* HTML Preview Section */}
          <div className="p-4 rounded-lg border border-gray-600 bg-gray-700 text-white">
            <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
          </div>
        </div>
      </div>
            {/* Footer section */}
            <footer className="mt-4 text-sm text-muted-foreground">
        Created By Ismail Ahmed Shah
      </footer>
    </div>
  );
}