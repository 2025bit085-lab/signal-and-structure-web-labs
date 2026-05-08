const WIDTH = 1280;
const HEIGHT = 720;
const COLORS = {
  background: "#f7f4ee",
  paper: "#fffdfa",
  ink: "#111111",
  muted: "#5f5a52",
  accent: "#835c34",
  line: "#d8d0c3",
  soft: "#efe7d9",
};

function addShell(slide) {
  slide.background.fill = COLORS.background;
  slide.shapes.add({
    geometry: "rect",
    position: { left: 34, top: 30, width: WIDTH - 68, height: HEIGHT - 60 },
    fill: COLORS.paper,
    line: { width: 1.2, fill: COLORS.line },
  });
  slide.shapes.add({
    geometry: "rect",
    position: { left: 68, top: 92, width: 130, height: 6 },
    fill: COLORS.accent,
    line: { width: 0, fill: COLORS.accent },
  });
}

function addTextBox(slide, text, position, options = {}) {
  const box = slide.shapes.add({
    geometry: "rect",
    position,
    fill: options.fill ?? COLORS.paper,
    line: options.line ?? { width: 0, fill: COLORS.paper },
  });
  box.text = text;
  box.text.typeface = options.typeface ?? "Aptos";
  box.text.fontSize = options.fontSize ?? 24;
  box.text.bold = options.bold ?? false;
  box.text.color = options.color ?? COLORS.ink;
  box.text.alignment = options.alignment ?? "left";
  box.text.verticalAlignment = options.verticalAlignment ?? "top";
  box.text.insets = options.insets ?? { left: 4, right: 4, top: 2, bottom: 2 };
  return box;
}

export async function slide03(presentation) {
  const slide = presentation.slides.add();
  addShell(slide);

  addTextBox(slide, "Project Site", {
    left: 68,
    top: 116,
    width: 520,
    height: 48,
  }, {
    typeface: "Georgia",
    fontSize: 32,
    bold: true,
  });

  slide.shapes.add({
    geometry: "roundRect",
    position: { left: 68, top: 206, width: 1140, height: 156 },
    fill: COLORS.soft,
    line: { width: 1, fill: COLORS.line },
  });

  addTextBox(slide, "GitHub Pages Link", {
    left: 96,
    top: 230,
    width: 260,
    height: 28,
  }, {
    typeface: "Georgia",
    fontSize: 22,
    bold: true,
  });

  addTextBox(slide, "https://2025bit085-lab.github.io/signal-and-structure-web-labs/", {
    left: 96,
    top: 272,
    width: 1030,
    height: 46,
  }, {
    fontSize: 22,
    color: "#64441f",
    bold: true,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });

  slide.shapes.add({
    geometry: "roundRect",
    position: { left: 68, top: 408, width: 548, height: 184 },
    fill: COLORS.paper,
    line: { width: 1, fill: COLORS.line },
  });
  slide.shapes.add({
    geometry: "roundRect",
    position: { left: 660, top: 408, width: 548, height: 184 },
    fill: COLORS.paper,
    line: { width: 1, fill: COLORS.line },
  });

  addTextBox(slide, "Repository", {
    left: 92,
    top: 434,
    width: 180,
    height: 28,
  }, {
    typeface: "Georgia",
    fontSize: 22,
    bold: true,
  });
  addTextBox(slide, "github.com/2025bit085-lab/signal-and-structure-web-labs", {
    left: 92,
    top: 476,
    width: 476,
    height: 74,
  }, {
    fontSize: 18,
    color: COLORS.ink,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });

  addTextBox(slide, "Use In Presentation", {
    left: 684,
    top: 434,
    width: 260,
    height: 56,
  }, {
    typeface: "Georgia",
    fontSize: 22,
    bold: true,
  });
  addTextBox(slide, "Open the live page during the demo to show the hosted project and confirm version-controlled deployment.", {
    left: 684,
    top: 498,
    width: 470,
     height: 74,
  }, {
    fontSize: 18,
    color: COLORS.ink,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });

  addTextBox(slide, "Live URL and repository are included so the slide stays useful after submission.", {
    left: 68,
    top: 651,
    width: 780,
    height: 24,
  }, {
    fontSize: 15,
    color: COLORS.muted,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });

  return slide;
}
