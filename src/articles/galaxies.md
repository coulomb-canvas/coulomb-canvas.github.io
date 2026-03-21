---
subid: galaxies
title: Galaxies
topic: astro
---

Right. So we've done planets, we've done stars, and at this point you might be thinking "surely that's it, what else is there?"

Oh, you sweet summer child.

Zoom out. Keep going. Further. Even further. No no no, too far, that's [next topic](http://127.0.0.1:5500/subtopic.html?subid=universe&topic=astro&year=1), zoom out a bit. There you go. You've just left the Milky Way. Welcome to the universe of **galaxies** — enormous collections of stars, gas, and dust, all bound together by gravity, doing their thing across incomprehensible distances.

There are three main flavours:

- **Spiral galaxies** — flat rotating discs with arms spiralling outward. The arms are where the action is: active star formation, young hot blue stars, all the drama. There's usually a central bulge and a surrounding halo of older stars. The Milky Way and Andromeda (M31) are both spiral galaxies.

- **Elliptical galaxies** — smooth, featureless, ellipsoidal blobs. Mostly old, low-mass stars with minimal star formation. Boring to look at, but the *largest* galaxies in the universe are ellipticals. Size isn't everything, but it's something.

- **Irregular galaxies** — everything else. No obvious structure, no spiral arms, no central bulge. Often small, sometimes being torn apart by a nearby galaxy's gravity. About a quarter of all galaxies fall into this category.

### How Far Away Are They?

Before we can learn anything meaningful about a galaxy, we need to know how far away it is. This turns out to be deeply non-trivial.

For a long time, nobody even knew what galaxies *were*. M31, the Andromeda "nebula," is the most distant object visible to the naked eye, and yet for centuries people assumed it must be something inside our own Milky Way. In 1920, there was a literal public debate — the **Great Debate** — between two astronomers, Shapley and Curtis, about whether the spiral nebulae were inside or outside the Milky Way. Shapley said inside. Curtis said they were separate "island universes" entirely.

Curtis won. But it took a measurement to settle it.

#### Cepheid Variables

The breakthrough came from a class of star called **Cepheid variables** — stars that periodically brighten and dim with a very regular period, anywhere from a few days to about 100 days. What makes them useful is a remarkable property: their **period is directly related to their absolute luminosity**. Longer period = intrinsically brighter star.

This is extraordinarily handy. If you can measure the period of a Cepheid (which is easy — you just watch it), you can immediately look up its absolute magnitude from the period-luminosity relation. Then you compare that to how bright it actually appears, and from the distance modulus:

$$m - M = 5\log_{10}\left(\frac{d}{10\,\text{pc}}\right)$$

you get the distance. Simple in principle. Painstaking in practice.

This is how Hubble measured the distance to M31 in 1923, settling the Great Debate definitively. M31 was way, *way* too far away to be inside the Milky Way. The universe had just gotten a lot bigger.

### Weighing a Galaxy

Once you know the distance to a galaxy, you know its actual physical size from its angular size on the sky. But how do you measure its *mass*?

Same trick as always: orbital mechanics. In the disc of a spiral galaxy, stars orbit the galactic centre on roughly circular paths. From the balance between gravitational and centripetal acceleration:

$$\frac{GM}{R^2} = \frac{V^2}{R}$$

$$\downarrow$$

$$M = \frac{V^2 R}{G}$$

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ M = \frac{V^2 R}{G} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Galactic mass from rotation
        </div><div class="formula-tooltip-desc">
            By measuring the orbital speed V of stars at galactocentric radius R, we can infer the mass of the galaxy interior to that radius. Note that only the mass inside the orbital radius contributes, by Newton's shell theorem.
        </div></span>
    </div>
</div>

We can't wait around for stars to complete an orbit — the Sun takes about **220 million years** to go round the Milky Way once. Instead, we use Doppler shifts to measure the orbital speeds of stars directly from their spectra. For an inclined spiral galaxy, one side is moving towards us and blueshifted, the other is moving away and redshifted. Plot orbital speed $V$ against galactocentric radius $R$ and you get a **rotation curve**.

And here's where things get interesting.

#### Dark Matter

If all the mass of a galaxy was concentrated in the visible stars and gas — which is mostly in the central bulge — then you'd expect orbital speeds to *decrease* with radius beyond the bulk of the stars, just like planets in the outer Solar System orbit slower than inner ones (Kepler's third law).

What we actually observe is that rotation curves stay **flat**. The orbital speed barely drops off even at the outermost detectable regions of galaxies. Since $M \propto V^2 R$, a constant $V$ means $M \propto R$ — the mass keeps *growing* all the way out to wherever we can still measure it.

But there's nothing *visible* out there. No stars, no gas, no dust. Which means there must be something else: **dark matter**. A vast, invisible halo of mass surrounding the visible galaxy, detectable only by its gravitational influence.

We now think dark matter isn't just ordinary matter that happens to be dark (like rogue planets or cold gas clouds) — it appears to be an entirely different type of particle that barely interacts with anything except gravity. We've never directly detected it. We just know it's there because galaxies would fly apart without it.

For the Milky Way, the mass interior to the Sun's orbit ($R = 8.3$ kpc, $V = 230$ km s$^{-1}$) works out to:

$$M = \frac{(230 \times 10^3)^2 \times 8.3 \times 10^3 \times 3.086 \times 10^{16}}{6.67 \times 10^{-11}} \approx 10^{11}\, M_\odot$$

Which is about 100 billion solar masses. And that's just the bit inside the Sun's orbit. The total mass of the Milky Way out to ~200 kpc is estimated to be about **15 times larger** still.

### Supermassive Black Holes

Here's a fun one. Most — possibly all — galaxies are thought to harbour a **supermassive black hole** at their centre. The Milky Way's is called Sagittarius A*, with a mass of about $4 \times 10^6\, M_\odot$. Others are far more extreme — some exceed **a billion solar masses**.

Most of the time these black holes just sit there quietly, not doing much. But occasionally they accrete infalling material, and when they do, the energy released is extraordinary. An accreting supermassive black hole converts around **10–40% of the rest mass of infalling material into radiation** — compared to a paltry 0.7% for hydrogen fusion. When the black hole is actively feeding, the nucleus of the galaxy can outshine the *entire rest of the galaxy* by factors of thousands. These are called **Active Galactic Nuclei (AGN)**, and at the extreme end, **quasars** — the most luminous sustained objects in the universe, with luminosities up to $\sim 3 \times 10^{14}\, L_\odot$.

The mass of the central black hole turns out to be correlated with the mass of the galaxy's central bulge, which suggests black holes and their host galaxies co-evolved somehow. Exactly how is still an open question.

### The Distribution of Galaxies

Zoom out even further, and galaxies themselves aren't randomly scattered across space. They cluster. The Milky Way belongs to the **Local Group**, a collection of a few dozen galaxies dominated by us and M31. Local Groups cluster into **galaxy clusters** (thousands of galaxies), which in turn form **superclusters**, connected by vast **filaments** of galaxy overdensities, with enormous near-empty **voids** in between.

The whole thing, on the largest scales, looks a bit like a cosmic spider's web. Or a brain, if you're feeling dramatic about it.

We think this large-scale structure emerged from tiny quantum fluctuations in the very early universe, amplified over billions of years by gravity — specifically by dark matter clumping first and dragging normal matter into the same structures afterward.

### TL;DR

- **Spiral galaxies**: rotating discs with star-forming arms — e.g. Milky Way, M31
- **Elliptical galaxies**: smooth, old, featureless, largest in the universe
- **Irregular galaxies**: everything else, about a quarter of all galaxies
- **Cepheid variables**: period → absolute luminosity → distance modulus → distance. This is how Hubble proved galaxies are external to the Milky Way
- **Galactic mass**: $M = V^2R/G$ from rotation curves
- **Dark matter**: rotation curves stay flat → mass keeps growing with radius → invisible mass halo around every galaxy
- **Supermassive black holes**: lurk at the centre of most galaxies; when actively fed, become AGN or quasars with absurd luminosities
- **Large-scale structure**: galaxies cluster into groups, clusters, filaments and superclusters, with voids in between

And remember: the universe doesn't care how big your galaxy is. It only cares about the mass.