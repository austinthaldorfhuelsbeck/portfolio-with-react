import React from "react";

export default function Blog() {
  return (
    <div>
      <div id="medium-widget"></div>
      <script src="https://medium-widget.pixelpoint.io/widget.js"></script>
      <script>
        MediumWidget.Init(
        {{
          renderTo: "#medium-widget",
          params: {
            resource: "https://medium.com/@austinthaldorfhuelsbeck",
            postsPerLine: 1,
            limit: 4,
            picture: "small",
            fields: ["description", "author", "publishAt"],
            ratio: "landscape",
          },
        }}
        )
      </script>
    </div>
  );
}
