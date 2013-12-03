# Scroll Helpers

To achieve scroll helpers, use the HTML structure below.

    <div class="scroll-parent">
      <div class="overflow-scroll scroll-up" data-step="200"><img src="img/scroll-up.png" alt="Scroll Up"/></div>
      <div class="overflow-scroll scroll-dn" data-step="200"><img src="img/scroll-dn.png" alt="Scroll Down"/></div>
      <div class="scroll-vert">
        <div class="scroll-content"></div>
      </div>
    </div>

## Horizontal

For a horizontal version, switch .scroll-up and .scroll-dn to .scroll-le and .scroll-ri (along with their respective images), and change .scroll-vert to .scroll-horz.

## Notes

.scroll-content must be the direct-and-only child of .scroll-vert. 

For the scroll functionality, data-step must be defined, but the hiding of the .overflow-scroll controllers will happen regardless of whether data-step is defined. These are currently only set up for content that exists when the page loads (they need their event triggers to be delegated).

.scroll-vert/horz and .scroll-content should have `box-sizing:border-box`.
