function placeDiv(element, startPosition) {
    let j = 0; // Start movement offset
    const speed = 2; // Pixels per frame
    const maxOffset = (window.screen.width > 738) ? window.screen.width : 738; // Reset after 1000px to prevent overflow
    let running = true; // Control animation state
    var x = startPosition;
    // Function to move elements
    function animate() {
        if (!running) return;
        if (j+x > maxOffset){ j = 0;
                                              x=0;
        } // Reset after reaching maxOffset
        if (j+startPosition > maxOffset) x = 0;
            let d = document.getElementById(element.id);
            if (d) {


                d.style.position = "absolute";
                d.style.left = (x +  j) + 'px';
    
            }
        

        j += speed; // Increment movement


        requestAnimationFrame(animate); // Continue animation
    }

    animate();


}