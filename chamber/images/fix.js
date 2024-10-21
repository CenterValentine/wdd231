


const fakeCursor = document.createElement('img');
fakeCursor.src = 'https://7659184.fs1.hubspotusercontent-na1.net/hubfs/7659184/custom_clinic_brand/other_branding_assets/cursor-png-1121.png'; // URL to cursor image
fakeCursor.id = 'fakeCursor';
fakeCursor.style.position = 'absolute';
fakeCursor.style.width = '20px'; // Cursor size
fakeCursor.style.height = '20px'; // Cursor size
fakeCursor.style.pointerEvents = 'none'; // Prevents fake cursor from interfering
fakeCursor.style.zIndex = '999999';
fakeCursor.style.display = 'none'; // hide
document.body.appendChild(fakeCursor);

//fake cursor 

function moveFakeCursor(startElement, targetElement, duration, hide = true) {
    const startRect = startElement.getBoundingClientRect(); // Get start position
    const targetRect = targetElement.getBoundingClientRect(); // Get target position
    const startX = startRect.left + startRect.width / 2; // Start center
    const startY = startRect.top + startRect.height / 2;
    const targetX = targetRect.left + targetRect.width / 2; // Target center
    const targetY = targetRect.top + targetRect.height / 2;
    const steps = 100; // Number of steps
    const stepTime = duration / steps; // Time per step
    let stepCount = 0;

    // Show the cursor at the start position
    fakeCursor.style.left = `${startX}px`;
    fakeCursor.style.top = `${startY}px`;
    fakeCursor.style.display = 'block'; // Reveal cursor

    const moveInterval = setInterval(() => {
        stepCount++;
        // Linear interpolation for smooth movement
        const currentX = startX + (targetX - startX) * (stepCount / steps);
        const currentY = startY + (targetY - startY) * (stepCount / steps);

        // Update the fake cursor position
        fakeCursor.style.left = `${currentX}px`;
        fakeCursor.style.top = `${currentY}px`;

        // When reaching the target
        if (stepCount >= steps) {
            clearInterval(moveInterval);

            // Simulate click
            setTimeout(() => {
                const clickEvent = new MouseEvent('click', { bubbles: true });
                targetElement.dispatchEvent(clickEvent);
                // Hide fake cursor
                if (hide) {
                    fakeCursor.style.display = 'none';

                }
            }, 500); // Delay before clicking for better UX
        }
    }, stepTime);
}

console.log("running script");

// direct react to the page
// if (window.location.pathname !== "https://doxy.me/v2/account/settings/account/") {
//     console.log("redirecting to dashboard", window.location.pathname);
//   window.history.pushState({}, "", "https://doxy.me/v2/account/settings/account/");
//   const event = new PopStateEvent('popstate');
// dispatchEvent(event);
// }

function updateContentForPath(pathname) {
    if (pathname === "/v2/account/settings/account") {
        console.log("Updating content for account settings...");
        // Load the desired content here, e.g., via AJAX or updating DOM nodes.
    }
}

// Ensure the function above is complete and properly closed before using it

if (window.location.pathname !== "https://doxy.me/v2/account/settings/account") {
    console.log("Current pathname:", window.location.pathname);
    console.log("Redirect condition met, initiating redirection...");

    try {
        // Update the browser's URL
        window.history.pushState({}, "", "https://doxy.me/v2/account/settings/account");
        console.log("pushState executed successfully. New URL:", window.location.href);

        // Dispatch the PopStateEvent to simulate navigation
        const event = new PopStateEvent('popstate');
        dispatchEvent(event);
        updateContentForPath(window.location.pathname);
        console.log("PopStateEvent dispatched successfully.");

    } catch (error) {
        console.error("Error during redirection:", error);
    }
} else {
    console.log("No redirection needed, already on the desired URL:", window.location.pathname);
}



    const pathCheckInterval = setInterval(function () {
        //check if the page is loaded
        if (window.location.pathname === "https://doxy.me/v2/account/settings/account/") {
            const buttonToClick = document.querySelectorAll("#apolloCallExperience");
            if (buttonToClick) {
                clearInterval(pathCheckInterval);

                const LogoStartingPoint = document.querySelector('.app');

                if (LogoStartingPoint && buttonToClick) {
                    // moveFakeCursor(startElement, targetElement, duration)
                    moveFakeCursor(LogoStartingPoint, buttonToClick, 900, false);
                }

                // buttonToClick.click();
                const pollInterval = setInterval(function () {
                    const inviteButton = document.querySelector(".invite-user.ui-button.ui-button--solid--primary.ui-button--medium");
                    if (inviteButton) {
                        moveFakeCursor(buttonToClick, inviteButton, 900, true);

                        // inviteButton.click();
                        clearInterval(pollInterval);
                    }
                }, 100);
            }
        }
    }, 100);
