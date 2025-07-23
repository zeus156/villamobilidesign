import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 50,
  height: 50,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "#C8860D", // Bronze color from your theme
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        borderRadius: "8px", // Slightly rounded corners
        fontWeight: "bold",
      }}
    >
      VM
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
