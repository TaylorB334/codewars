function findNeedle(haystack) {
    let needles = haystack.findIndex(item => item === "needle")
    return `found the needle at position ${needles}`
  }