document.addEventListener('DOMContentLoaded', function() {
  $ = (queryString) => document.querySelector(queryString);

  const shiftHue = (hue) => (hue + 1) % 360;

  let hue = 0;

  const animate = () => {
    hue = shiftHue(hue);
    const color = `hsl(${hue}, 100%, 50%)`;
    const variation = 1.5 + Math.sin(Date.now() / 1000);
    const position = `0 ${variation} -2`;
    const rotation = `-90 ${ 90 * variation}`

    $('a-sphere').setAttribute('color', color);
    $('a-plane').setAttribute('color', color);

    $('a-sphere').setAttribute('position', position);
    $('a-plane').setAttribute('rotation', rotation)

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

})
