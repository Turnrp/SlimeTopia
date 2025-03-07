document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (gl) {
        // Check for WebGL errors and reload on error
        function checkWebGLErrors() {
            const error = gl.getError();
            if (error !== gl.NO_ERROR) {
                location.reload();
            }
            requestAnimationFrame(checkWebGLErrors);
        }
        checkWebGLErrors();

        // Close the page if WebGL context is lost
        canvas.addEventListener("webglcontextlost", (event) => {
            event.preventDefault();
            window.close();
        });
    }
});
