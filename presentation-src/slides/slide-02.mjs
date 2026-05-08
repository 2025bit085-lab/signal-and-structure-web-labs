const WIDTH = 1280;
const HEIGHT = 720;
const COLORS = {
  background: "#f7f4ee",
  paper: "#fffdfa",
  ink: "#111111",
  muted: "#5f5a52",
  accent: "#835c34",
  line: "#d8d0c3",
  soft: "#f4eee3",
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

export async function slide02(presentation) {
  const slide = presentation.slides.add();
  addShell(slide);

  addTextBox(slide, "Project Aim", {
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
    position: { left: 68, top: 188, width: 1140, height: 200 },
    fill: COLORS.soft,
    line: { width: 1, fill: COLORS.line },
  });

  addTextBox(slide, "To build a clear and accessible practice website that demonstrates steady growth in HTML page structure, navigation, multimedia use, semantic layout, tabular organization, and form design.", {
    left: 96,
    top: 228,
    width: 1084,
    height: 128,
  }, {
    fontSize: 25,
    color: COLORS.ink,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });

  const bullets = [
    "Apply the six lab outcomes in one coherent project.",
    "Keep the interface readable, properly labeled, and easy to navigate.",
    "Show meaningful content instead of placeholder text or empty structure.",
  ];

  bullets.forEach((bullet, index) => {
    slide.shapes.add({
      geometry: "roundRect",
      position: { left: 68, top: 430 + index * 74, width: 1140, height: 54 },
      fill: COLORS.paper,
      line: { width: 1, fill: COLORS.line },
    });

    addTextBox(slide, `- ${bullet}`, {
      left: 94,
      top: 444 + index * 74,
      width: 1074,
      height: 26,
    }, {
      fontSize: 20,
      color: COLORS.ink,
      insets: { left: 0, right: 0, top: 0, bottom: 0 },
    });
  });

  addTextBox(slide, "The aim follows the same practical, instruction-led tone shown in the reference screenshots.", {
    left: 68,
    top: 653,
    width: 760,
    height: 24,
  }, {
    fontSize: 15,
    color: COLORS.muted,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });

  return slide;
}
