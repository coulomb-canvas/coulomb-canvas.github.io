---
subid: universe
title: The Universe
topic: astro
---

Alright. Deep breath.

We've done planets. We've done stars. We've done galaxies. Each time we've zoomed out, the universe has gotten bigger and weirder and more humbling. So now, for the final time, we zoom out one last time. All the way out.

What even *is* the universe? Where did it come from? Is it expanding? How old is it? What's it made of?

Buckle up.

### Hubble's Law

In 1915, an astronomer called Slipher noticed something odd. Galaxies — or "nebulae" as they were still being called at the time — seemed to mostly be moving *away* from us. You could tell because their spectral lines were shifted towards longer, redder wavelengths. The Doppler effect, as we've seen before, gives us the recession speed from the fractional shift in wavelength:

$$\frac{\lambda - \lambda_0}{\lambda_0} = \frac{V_R}{c}$$

Most stars in the Milky Way move towards *and* away from us in roughly equal measure — they're just orbiting the galaxy. But galaxies? They were overwhelmingly running away. Something was up.

Then in 1929, Hubble — armed with Cepheid-derived distances to nearby galaxies — noticed that the recession speed wasn't random. It scaled *linearly* with distance:

$$v = H_0 d$$

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ v = H_0 d \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Hubble's Law
        </div><div class="formula-tooltip-desc">
            The recession speed of a galaxy is proportional to its distance. The constant of proportionality \(H_0\) is Hubble's constant, measured in km s\(^{-1}\) Mpc\(^{-1}\). The subscript 0 indicates this is the present-day value — Hubble's "constant" actually changes with time.
        </div></span>
    </div>
</div>

This is **Hubble's Law**, arguably the single most important observational result in the history of cosmology. $H_0$ is **Hubble's constant**, currently measured at around $70$ km s$^{-1}$ Mpc$^{-1}$, give or take depending on how you measure it (and there's a whole ongoing argument about that, but we'll park it).

What does it mean that recession speed is proportional to distance? It means the **universe is expanding**. Not galaxies flying outward through space like shrapnel from an explosion — space *itself* is stretching, carrying the galaxies with it.

And before you ask: no, this does not mean we are at the centre of the universe. Every observer, everywhere, would see the same thing — all other galaxies receding from them. There is no centre. There is no edge. The universe is just... bigger than your intuition is equipped to handle.

### Redshift

The expansion of the universe gives us an extraordinarily useful tool. As light travels across the expanding universe, the space it's travelling through stretches, and the wavelength of the light stretches with it. This is **cosmological redshift**, and it's related to how much the universe has expanded since the light was emitted:

$$1 + z = \frac{\lambda_{\text{obs}}}{\lambda_0}$$

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ 1 + z = \frac{\lambda_{\text{obs}}}{\lambda_0} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Cosmological redshift
        </div><div class="formula-tooltip-desc">
            \(z\) is the redshift. \(\lambda_{\text{obs}}\) is the wavelength we observe, and \(\lambda_0\) is the wavelength the light was emitted at. A redshift of \(z = 1\) means the universe has doubled in size since the light was emitted.
        </div></span>
    </div>
</div>

For nearby galaxies, this is essentially the same as the Doppler shift, and $v \approx cz$. For distant galaxies, the full relativistic treatment is needed — but the key point is that redshift tells you how much the universe has expanded since the light left. Looking at a galaxy with $z = 2$ means you're seeing it as it was when the universe was one third of its current size. Telescopes are time machines.

### The Age of the Universe

Here's a beautiful implication of Hubble's Law. If everything is currently moving apart, and we wind back the clock, everything must have been closer together in the past. Wind it back far enough and everything was in the same place. There must have been a beginning.

A rough estimate of the age of the universe follows almost immediately from Hubble's constant. If a galaxy at distance $d$ is receding at speed $v = H_0 d$, then the time since it was co-located with us is just:

$$t_0 \sim \frac{d}{v} = \frac{1}{H_0}$$

This is the **Hubble time**. Plugging in $H_0 = 70$ km s$^{-1}$ Mpc$^{-1}$:

$$t_0 \sim H_0^{-1} \approx 14 \text{ Gyr}$$

The actual age, accounting for the fact that the expansion rate has changed over time, comes out to about **13.8 billion years**. Which, for the record, is about three times the age of the Earth, and long enough for a fair amount to have happened.

Hubble's original estimate was wildly off — his value of $H_0$ was about seven times too large, giving an age of the universe *younger than the Earth*. Which was, understandably, a bit of a problem. The issue was that his Cepheid distance scale was miscalibrated. Once that was sorted out over the following decades, the numbers started making sense.

### The Big Bang

So the universe had a beginning. What was that beginning like?

The **Big Bang** is the name we give to the extraordinarily hot, dense state the universe was in at the very start — and to the theory that describes how it evolved from that state into what we see today.

A few things it successfully explains:

**1. The abundance of light elements**

In the first few minutes after the Big Bang, the universe was hot enough for nuclear fusion — but not for long. The brief window of **Big Bang nucleosynthesis** produced the universe's initial stock of hydrogen, helium, and a tiny bit of lithium in proportions that match what we observe extremely well. About 75% hydrogen, 25% helium by mass. Everything heavier than lithium was forged later, in stars.

(And everything heavier than iron was forged in supernova and kilonova explosions — the gold in any jewellery you might be wearing was made in a neutron star merger. You're welcome for that fact.)

**2. The large-scale structure of the universe**

The filaments, voids, clusters, and superclusters we see in the galaxy distribution today grew from tiny quantum fluctuations in the very early universe, amplified over billions of years by gravity. The Big Bang predicts these structures should exist. They do.

**3. The Cosmic Microwave Background**

This one deserves its own section.

### The Cosmic Microwave Background

In 1965, two physicists at Bell Labs — Penzias and Wilson — were testing a new radio antenna and kept picking up a persistent, annoying background hiss that seemed to come equally from every direction in the sky. They checked everything. They evicted pigeons nesting in the antenna. The hiss remained.

What they had accidentally discovered was the **Cosmic Microwave Background** (CMB) — and it won them the Nobel Prize.

Here's what it is. For the first 380,000 years of the universe's existence, it was so hot and dense that it was essentially an opaque plasma — photons couldn't travel far before being scattered by free electrons. Then, as the universe expanded and cooled to around 3,000 K, electrons and protons combined to form neutral hydrogen atoms for the first time. Suddenly, photons could travel freely. The universe became **transparent**.

Those photons have been travelling ever since. They fill the entire universe uniformly. By the time they reach us, the expansion of the universe has stretched their wavelengths by a factor of about 1,100 — cooling them from 3,000 K down to just **2.725 K**. That puts them in the microwave part of the spectrum, which is why we call it the Cosmic Microwave Background.

The CMB is the most perfect blackbody spectrum ever measured. Its temperature is uniform to about 1 part in 10,000 across the entire sky. But those tiny fluctuations matter enormously — they are the seeds from which all galaxies, all stars, all structure in the universe eventually grew. They are the fingerprints of the very early universe, preserved in the sky for 13.8 billion years.

It is, without exaggeration, one of the most remarkable things humans have ever measured.

### What Is the Universe Made Of?

You might assume the universe is made of the same stuff as everything you've ever encountered — protons, neutrons, electrons, the usual cast of characters. You would be mostly wrong.

The current best picture, pieced together from CMB measurements, galaxy surveys, and supernova observations, gives us roughly:

| Component | Fraction |
|---|---|
| Ordinary matter (stars, gas, you) | ~5% |
| Dark matter | ~27% |
| Dark energy | ~68% |

**Ordinary matter** — everything we can see, touch, detect, or interact with — is about 5% of the universe. That's it. The periodic table is a footnote.

**Dark matter** we've already met via galaxy rotation curves. It doesn't emit or absorb light, it doesn't interact electromagnetically, it just gravitates. We have no idea what it is at the particle level, despite it making up more than a quarter of the universe.

**Dark energy** is weirder still. In 1998, two independent teams studying distant supernovae discovered that the expansion of the universe isn't slowing down due to gravity — it's *speeding up*. Something is driving the accelerated expansion. That something is called dark energy, and beyond saying that it behaves like a constant energy density of empty space, we have essentially no idea what it is either.

So to summarise: 95% of the universe is made of things we don't understand. Physics is going great.

### TL;DR

- **Hubble's Law**: $v = H_0 d$ — recession speed is proportional to distance, meaning the universe is expanding
- **Redshift**: $1 + z = \lambda_{\text{obs}}/\lambda_0$ — light is stretched by the expansion of the universe
- **Hubble time**: $t_0 \sim H_0^{-1} \approx 14$ Gyr — rough age of the universe
- **The Big Bang**: the universe began in an extremely hot, dense state ~13.8 billion years ago
- **Big Bang nucleosynthesis**: produced the universe's hydrogen and helium in the first few minutes
- **The CMB**: relic radiation from 380,000 years after the Big Bang, now cooled to 2.725 K, uniform to 1 part in 10,000
- **Composition**: ~5% ordinary matter, ~27% dark matter, ~68% dark energy — we understand about 5% of the universe
- **No centre**: the universe is homogeneous and isotropic — every observer sees the same expansion

And remember: the universe doesn't care where you think the centre is. There isn't one.