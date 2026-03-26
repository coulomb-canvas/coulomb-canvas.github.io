---
subid: stars
title: Stars
topic: astro
---

So we've had a look at what's in our solar system, we've had a look at some of the exoplanets outside of it. But we haven't actually talked about the big glowy things that all of these planets are orbiting. Which, now that I think about it, is a bit like spending an entire cooking show talking about plates without mentioning the food.

So. Stars.

### The Hertzsprung-Russell Diagram

About 100 years ago, two astronomers — Hertzsprung and Russell — noticed something interesting. Stars aren't just randomly scattered across a plot of luminosity vs temperature. They cluster in very specific regions. And whenever something in nature clusters in a specific region, that means there's an underlying principle at work that needs understanding.

<div class="container">
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box left-box">
                <img src="images/Astronomy/HR diagram.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip left-box" style="left:100%;"> <div class="image-tooltip-title">
                Figure 1: HR Diagram
            </div><div class="image-tooltip-desc">
                ...
            </div></span>
        </div>
    </div>
    <!-- DIVIDING LINE -->
    <div class="text">
        <p> 
            The plot they came up with is now called the **Hertzsprung-Russell diagram**, or H-R diagram for short, and it is *the* fundamental tool of stellar astrophysics. HR diagrams have 3 main features. First the big, chunky line of stars in the middle. These are <em>main sequence stars</em>, and include some very popular characters, such as Proxima Centuri, Vega, and the one and only GOAT, the Sun himself!
        </p>
        <p> 
            There is also a slightly smaller line in the bottom left, which contains <em>white dwarf</em> stars, and a little bundle at the top of the main sequence section, containing <em>red giant</em> stars. You may be familiar with these star types, but if not, don't worry too much, we'll get into them soon. For now, just know that, for once in their lives, scientists were able to create names which match what we see. Red giants are big and red stars, white dwarves are small and white stars.
        </p>
    </div>
    <!-- DIVIDING LINE -->
</div>

Of course, while they were able to give sensible names for the star types, it didn't take long for them to take the piss once again, since if you look closely at the graph, you'll notice something which makes HR diagrams slightly annoying to read at first (and at second, and third, and fourth, and actually all of the cardinal numbers, it's just annoying no matter when you try and read it): *the axes are both flipping backwards*.

- Temperature increases to the left. (Yes, left. Hot things are on the left. No, I don't know why they did it this way either.)
- Luminosity increases upward, but since we often express this as magnitude, and brighter objects have smaller magnitudes, that axis is also inverted.

<div class="container">
    <div class="text">
        <p> 
            The theoretician's version is slightly more sensible, plotting the logarithm of luminosity (\( \log_{10} L/L_\odot \)) on the y-axis and log temperature (\( \log_{10} T \)) on the x-axis. This means the luminosity is now the right side up! But temperature is still the wrong way around, which is annoying but whatever, it's fine I guess...
        </p>
        <p>
            Why take logs, you may ask. Well let me show you! Remember from a while ago we had the equation for the luminosity of stars:
        </p> \[ L = 4\pi R^2 \sigma T_\text{eff}^4 \]
        <p>
            Now take the logarithm and see what you get:
        </p> \[\log_{10} L = 4\log_{10} T_\text{eff} + \log_{10}(4\pi R^2)\]
    </div>
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box">
                <img src="images/Astronomy/Theoretical HR.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip" style="left:-40%;"> <div class="image-tooltip-title">
                Figure X
            </div><div class="image-tooltip-desc">
                ...
            </div></span>
        </div>
    </div>
</div>

Hey, that kinda looks like a \\( y = mx + c \\) kinda thing! So by making \\( \log L \\) the y and \\( \log T \\) the x, that means if we were to take a pencil and draw a line with a gradient of -4 (minus because temperature is inverted, remember?), not only will you damage your screen, but all the stars on that line will have the same radius. 

### The Stellar Classes

It's about we gave the main sequence, red giant and white dwarf stars a proper introduction

#### Main Sequence Stars

Like I said before, this is the big chunk in the middle. A diagonal band running from the lower-right (dim, cool, red) to the upper-left (bright, hot, blue). This is where stars spend the vast majority of their lives, fusing hydrogen to helium in their cores.

The main sequence is fundamentally a **sequence of mass**. Low mass stars sit at the bottom-right, high mass stars at the top-left. The lowest mass stars are around \\( 0.08 M_\odot \\) — anything less than this never gets hot enough to start hydrogen fusion and doesn't make the cut. The upper end goes up to around \\( 100 M_\odot \\), though these monsters are extremely rare and short-lived.

Our Sun is a perfectly ordinary main sequence star. Nothing special. Sorry Sun.

#### Red Giants

Found in the upper-right. Cool, but bright, which means they must be *enormous* to compensate — radii from \\( 10 R_\odot \\) up to \\( 1000 R_\odot \\). For reference, \\( 1 \text{ AU} \approx 200 R_\odot \\), so the biggest red giants could swallow all the inner planets without much effort. Cheerful thought.

Red giants are what main-sequence stars become once they run out of hydrogen in their cores. They're rarer than main-sequence stars, but so luminous that they can be seen from much greater distances.

#### White Dwarfs

Lower-left corner. Hot, but dim — so they must be tiny (typically about \\( 0.01 R_\odot \\), roughly the size of Earth). They are the final stable state of stars with initial masses up to about  \\(5\\)-\\(8 M_\odot\\). The vast majority of stars that have ever evolved off the main sequence end up here.

White dwarfs are common by number, but so faint that they're hard to spot unless they're nearby.

#### Brown Dwarfs, Neutron Stars, and Black Holes

These three don't show up prominently on standard H-R diagrams, for various reasons:

- **Brown dwarfs** ( \\(0.013\\)–\\(0.08 M_\odot \\)): too cool and faint. They're intermediate between planets and stars — massive enough to fuse deuterium but not hydrogen. They contract and cool over time, powered mainly by gravity.

- **Neutron stars**: remnants of stars initially more massive than \\(5\\)–\\(8 M_\odot \\). About 10 km in radius. Absurdly dense (about  \\( 10^{18} \\text{kg m}^{-3} \\)). Too rare and faint to appear in typical H-R diagrams, but the physics is *wild* — we'll come back to these.

- **Black holes**: the end state of the most massive stars ($ \gtrsim 25$–$40 M_\odot $). Produce no light. Can't be plotted. Can't be ignored either.

### Star Clusters

Here's a problem with the H-R diagrams we've been looking at: they mix stars of different ages, different compositions, and different origins all in one plot, which makes interpreting *evolution* quite tricky.

Enter **star clusters** — groups of stars that all formed at the same time, from the same cloud of gas. Since they all started together, any differences between them now are purely down to their different masses evolving at different rates. They're basically a naturally occurring controlled experiment.

There are two types:

- **Open clusters**: a few hundred to a few thousand stars, found in the galactic disk. Ages range from under a million years to several billion. Famous examples: the Pleiades, the Hyades.
- **Globular clusters**: much older, much denser, found in the galactic halo. Less useful for studying evolution across a range of ages.

When you plot the H-R diagram of a cluster, you see something very instructive. In a *young* cluster, you have a full main sequence stretching up to very bright, very massive stars. As the cluster ages, the top of the main sequence gradually disappears — the most massive stars burn out first and leave.

The point where the main sequence ends is called the **main-sequence turn-off**, and it's extremely useful because it directly tells you the age of the cluster. The higher up the turn-off, the younger the cluster.

You also typically see a **Hertzsprung gap** — an empty region between the main sequence and the red giants. This is because the transition from main-sequence star to red giant happens so fast that you barely catch any stars in the act. In older clusters ($ \gtrsim 2 $ Gyr), this gap fills in and becomes a continuous red giant branch.

The schematic to have in your head is this: as a cluster ages, the main sequence gets shorter from the top down, the turn-off creeps lower, and the red giant branch becomes more prominent.

### Physical Conditions Inside Stars

How do we know what's actually going on inside a star? We can't exactly pop one open and have a look. Instead, we use the same physics you've been learning all year — gravity, thermodynamics, ideal gases — and make some (admittedly crude) approximations.

#### Central Pressure

Stars are in **hydrostatic equilibrium** — at every layer, the pressure pushing outward exactly balances the weight of everything above it. The equation for this is:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dP}{dr} = -\rho g \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: Hydrostatic equilibrium
        </div><div class="formula-tooltip-desc">
            Have we seen this before? It looks oddly familiar...
        </div></span>
    </div>
</div>

which should look familiar from the atmosphere scale height we covered in the exoplanets section, except for some reason we are choosing to be more general here by using an \\( r \\) instead of a \\( z \\) for some reason

To estimate the central pressure, we integrate this from the surface to the centre. Making the crude approximation that density is roughly constant (\\( \bar{\rho} = M / \frac{4}{3}\pi R^3 \\)) and gravity is roughly equal to its surface value (\\( g_S = GM/R^2 \\)):

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ P_C \approx \bar{\rho} g_S R = \frac{3GM^2}{4πR^4} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: Central pressure
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Of course those are both daft approximations, because well... they aren't constant. They just aren't

The key scaling here is \\( P_C \propto M^2 / R^4 \\). For the Sun this gives a central pressure of around \\( 10^{14} \\) Pa. Not bad for a rough estimate.

#### Central Temperature

<p>With the pressure, we can estimate the temperature using the <strong>ideal gas equation</strong> (yes, even inside a star — the material is fully ionised and the particles are so small that they still behave like an ideal gas despite the extreme density)</p> \[ P = \frac{\rho k_B T}{\mu} \]

Combining with the central pressure estimate:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ k_B T_C \sim \frac{GM\mu}{R} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

And once again, we use the 'similar to' symbol rather than equals, because as you might expect, if you take a piss-poor approximation for pressure and use it to derive temperature, you end up with a piss-poor approximation for pressure. For the Sun, this gives \\( T_C \sim 12 \times 10^6 \text{ K} \\). The actual value from computer models is about \\( 15 \times 10^6 $ \text{ K} \\). Which isn't great but it's the best we can do for now.

This equation also tells us something deeper: the core temperature of a star scales as \\( T_C \propto M/R \\). Smaller means hotter. This is why stars that contract get hotter — which is exactly what happens as they evolve.

### TL;DR

- The H-R diagram plots luminosity vs temperature — the axes are both inverted, because astronomers love to keep you on your toes
- Lines of constant radius have gradient 4 on the theoreticians' H-R diagram
- Main sequence: hydrogen fusing in the core, most of a star's life, runs from cool/dim to hot/bright — it's a sequence of mass
- Red giants: cool but huge and bright, post-main-sequence stars
- White dwarfs: hot but tiny and dim, remnants of low-mass stars
- Star clusters let us study stellar evolution at a fixed age — the main-sequence turn-off tells us how old the cluster is
- Hydrostatic equilibrium makes a reappearance, ain't that fun: \\( dP/dr = -\rho g \\) — gravity and pressure in a standoff

Central pressure: $P_C \sim GM^2/R^4$

Central temperature: $k_B T_C \sim GM\mu/R$ — thermal energy balancing gravitational energy per particle
