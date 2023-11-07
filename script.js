document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove the selected attribute from all tabs
            tabs.forEach(t => t.setAttribute('aria-selected', false));
            // Hide all tab panels
            tabPanels.forEach(panel => panel.hidden = true);

            // Set the clicked tab as selected
            tab.setAttribute('aria-selected', true);
            // Show the associated tabPanel
            const id = tab.getAttribute('aria-controls');
            const tabPanel = document.getElementById(id);
            tabPanel.hidden = false;
        });
    });
});
