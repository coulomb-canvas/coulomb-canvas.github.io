---
subid: star-physics
title: Stellar Astrophysics
topic: astro
---

Right, so last time we figured out what stars are, how to classify them, and what's going on in their cores. But we left a pretty big question unanswered.

What actually *happens* to a star over time?

Glad you asked. Pull up a chair. This is a good one.

### Stellar Lifetime

Here's the uncomfortable truth about stars. They're hot. And hot things lose heat. And the energy has to come from somewhere.

For a star supported by thermal pressure, the core temperature is:

$$k_B T_C \sim \frac{GM\mu}{R}$$

This thermal energy is constantly leaking outward as radiation — that's literally the light and heat the star produces. Since the energy supply is finite, stars must eventually change. **Stellar evolution is not optional.** It's just thermodynamics being thermodynamics.

So what's the energy source? The answer is **nuclear fusion**. Specifically, the fusion of hydrogen into helium, which releases about **0.7% of the rest mass energy**:

$$E_F = 0.007 M_\odot c^2 \approx 1.26 \times 10^{45} \text{ J}$$

That's enough to power the Sun at its current luminosity for around $10^{11}$ years. In practice, not all of the hydrogen gets used — only about $0.15\, M_\odot$ on the main sequence — but even so, the Sun's main-sequence lifetime works out to around **10–15 billion years**. Comfortably long enough for evolution, fossils, and you reading this.

### The Mass-Luminosity Relation

Before we get into the life story of a star, there's one relationship worth nailing down, because it underpins basically everything that follows.

It turns out that for main-sequence stars, luminosity scales very strongly with mass:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ L \propto M^4 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Mass-Luminosity Relation
        </div><div class="formula-tooltip-desc">
            The luminosity of a main-sequence star scales roughly as the fourth power of its mass. This is an empirical result which can also be verified with computer models, and it has enormous consequences for stellar lifetimes.
        </div></span>
    </div>
</div>

This is *not* an obvious result. You might expect luminosity to scale linearly with mass — more fuel, more light — but no. Doubling the mass gives you *sixteen times* the luminosity. Massive stars are profligate in a way that would make any financial advisor weep.

Why does this matter? Because the **main-sequence lifetime** is just the energy supply divided by the rate it's being spent:

$$t_{MS} \sim \frac{E_F}{L} \sim \frac{M}{M^4} = M^{-3}$$

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ t_{MS} \propto M^{-3} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Main-sequence lifetime
        </div><div class="formula-tooltip-desc">
            More massive stars burn through their fuel far faster. Using the Sun as a reference point (with a main-sequence lifetime of ~12 Gyr), you can scale to any other mass.
        </div></span>
    </div>
</div>

Using the Sun as a benchmark ($t_{MS,\odot} \approx 12$ Gyr):

| Star Mass | Lifetime |
|---|---|
| $0.5\, M_\odot$ | ~100 Gyr (older than the Universe) |
| $1\, M_\odot$ | ~12 Gyr |
| $5\, M_\odot$ | ~100 Myr |
| $10\, M_\odot$ | ~15 Myr |

Let that sink in for a second. A $0.5\, M_\odot$ star will still be on the main sequence long after the Universe has celebrated its 100 billionth birthday. Meanwhile, a $10\, M_\odot$ star is done before the planet Earth would even have formed. Massive stars live fast, die young, and explode dramatically. Low-mass stars just... quietly persist. Basically the tortoise and the hare, except the hare explodes.

This also explains why the **upper main sequence disappears as clusters age** — the most massive, most luminous stars burn out first and leave, progressively peeling the main sequence from the top down. The position of the main-sequence turn-off is essentially a clock.

And one more implication worth flagging: if you observe hot, massive stars in a distant galaxy, you *know* star formation is currently happening there. Those stars are so short-lived that they couldn't have formed long ago and still be around.

***

### The Life of a Sun-Like Star

Alright. Let's follow a star like the Sun from cradle to grave.

#### Stage 1: The Main Sequence

This is the bulk of the story — roughly 10–15 billion years of quietly fusing hydrogen into helium in the core.

It's not entirely static though. As hydrogen is consumed, the core composition changes. To maintain the fusion rate (which must match the rate of energy loss), the **core temperature gradually rises**, which it can do by slowly contracting ($T_C \propto M/R$, so smaller $R$ means higher $T_C$). This means the luminosity *slowly increases* over the main-sequence lifetime. The Sun today is actually about 30% brighter than it was when it first formed. Faint Young Sun problem, if you've heard of it.

#### Stage 2: Red Giant

Eventually, hydrogen runs out in the **centre** of the star. Hydrogen fusion doesn't stop entirely — it shifts to a **shell** around the inert helium core, continuing to burn outward as the helium core grows.

As fusion moves into less dense regions, the temperature has to increase even more to keep things going, and the luminosity rises. Meanwhile, something counterintuitive happens: the **core contracts** but the **envelope expands**. The star puffs up to enormous size, becoming a **red giant**.

Why does the envelope expand when the core contracts? Honest answer: it just does — this behaviour emerges from computer models when you account for the fact that the core and envelope have very different compositions and don't mix. There's no simple intuitive reason that I can give you without lying to you, so I won't.

The Sun will eventually reach a radius close to Earth's current orbital radius. Whether it actually swallows the Earth depends on a competition between the Sun's expanding radius and Earth's orbit drifting outward as the Sun loses mass. The jury is still out — but either way, the oceans will have boiled away long before we get anywhere near that stage. So, yknow. Don't worry about it.

Mercury and Venus are cooked. Mars will probably be fine. Good luck to everyone in between.

#### Stage 3: Horizontal Branch

The inert helium core keeps contracting and getting hotter. Eventually — at around $10^8$ K — **helium fusion ignites**. Three helium nuclei slam together to form one carbon nucleus (the *triple-alpha process*), and a new energy source kicks in.

Helium fusion is *extraordinarily* temperature sensitive ($\propto T^{40}$). Once it starts, it ramps up almost instantaneously in what is dramatically called the **helium flash**. The core heats up and expands, the envelope contracts in response, and the star shrinks back down to become a **horizontal branch star** — hotter and more compact than the red giant it just was.

#### Stage 4: Asymptotic Giant Branch

History repeats itself, but with helium now. The helium in the core runs out, leaving a **carbon-oxygen core**. Fusion continues in *two* shells — a hydrogen-burning shell on the outside and a helium-burning shell underneath.

The star takes on an onion-like structure: carbon and oxygen at the centre, helium above that, hydrogen envelope on top. The carbon-oxygen core contracts, the envelope expands once more, and the star returns to the giant branch — this time called the **asymptotic giant branch** (AGB).

#### Stage 5: White Dwarf (and Planetary Nebula)

The double-shell burning stage is unstable. The star becomes enormously luminous and starts losing mass at a dramatic rate. Eventually so much material is ejected that fusion simply cannot continue, and what's left is just the **exposed core** — roughly $0.6\, M_\odot$ of carbon and oxygen, with thin overlying layers of helium and hydrogen. This is the **white dwarf**.

But here's the beautiful bit. As the hot core is exposed, the vast cloud of ejected material surrounding it gets **ionised** by the intense ultraviolet radiation. It lights up into a glowing shell of gas called a **planetary nebula** — one of the most visually stunning objects in the universe.

*(They're called planetary nebulae because through a small telescope they look vaguely round and planet-like. They have absolutely nothing to do with planets. Astronomers named them poorly and have been too proud to change it since.)*

### Stellar Remnants

The eventual fate of a star depends almost entirely on its initial mass. Here's the full breakdown:

| Initial Mass | Fate |
|---|---|
| $< 0.08\, M_\odot$ | Brown dwarf — never ignites hydrogen, slowly cools forever |
| $0.08$–$0.8\, M_\odot$ | White dwarf eventually, but so slowly they're still on the main sequence today |
| $0.8$–$5$–$8\, M_\odot$ | White dwarf (via red giant and AGB) |
| $5$–$8$ to $25$–$40\, M_\odot$ | Neutron star (via supernova) |
| $> 25$–$40\, M_\odot$ | Black hole |

The boundaries are fuzzy because the exact outcome depends on element abundances and how much mass the star sheds during its life — both of which are genuinely hard to model.

About **95% of stars that evolve at all** end up as white dwarfs.

### White Dwarfs and Degeneracy Pressure

Here's a problem. Thermal pressure requires heat, and heat slowly leaks away. So how does a white dwarf remain stable? Why doesn't it just keep contracting forever?

The answer is **quantum mechanics**. Specifically, **Pauli's exclusion principle** — no two electrons can occupy the same quantum state.

Here's the rough argument. From de Broglie, every particle has a wavelength:

$$\lambda = \frac{h}{p}$$

If you insist that two electrons can't overlap — meaning their de Broglie wavelengths can't be larger than their mean separation — then for an electron number density $n_e$, the mean spacing is $n_e^{-1/3}$, giving:

$$p \sim h n_e^{1/3}$$

This momentum isn't thermal — it exists purely because the electrons are **confined to a finite space**. Confine them more (increase $n_e$), and the momentum — and thus the pressure — increases. This is **degeneracy pressure**, and crucially:

$$E_d \sim \frac{p^2}{2m_e} \sim \frac{h^2 n_e^{2/3}}{2m_e}$$

**It doesn't depend on temperature.** That's the key point. Unlike thermal pressure, degeneracy pressure doesn't require heat to exist. So as a white dwarf cools over billions of years, the pressure holding it up doesn't diminish. It just... stays stable. Indefinitely. A white dwarf is not dying — it's just waiting.

The inverse mass dependence also means electrons carry far higher degeneracy energy than protons or neutrons at the same density — which is why it's the *electrons* that support white dwarfs, even though the bulk of the mass is in the carbon and oxygen nuclei.

***

### The Chandrasekhar Limit

Here's where it gets spicy. Degeneracy pressure is not unlimited.

Consider how the energies scale with mass $M$ and radius $R$:

$$E_d \propto M^{2/3} R^{-2}, \qquad E_G \propto -\frac{M^2}{R}$$

If you increase the mass, gravity wins harder (scales as $M^2$) compared to degeneracy pressure (scales as $M^{2/3}$). The star compensates by contracting, which raises $E_d$ faster than $E_G$. So far, so stable.

But here's the catch: once the density gets high enough ($\sim 3.3 \times 10^8$ kg m$^{-3}$), the electrons become **relativistic**. At that point:

$$E_d \propto M^{1/3} R^{-1}$$

Now $E_d$ and $E_G$ scale with $R$ in **exactly the same way**. Contracting the star no longer rescues it — the balance can't be restored. Above a critical mass, the star collapses.

This critical mass is the **Chandrasekhar limit**:

$$M_{Ch} \approx 1.44\, M_\odot$$

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ M_{Ch} \approx 1.44\, M_\odot \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: The Chandrasekhar Limit
        </div><div class="formula-tooltip-desc">
            The maximum mass a white dwarf can have before degeneracy pressure can no longer support it against gravitational collapse. Derived by Subrahmanyan Chandrasekhar in 1930, aged 20, on a boat to England. Some people just don't give others a chance.
        </div></span>
    </div>
</div>

Chandrasekhar worked this out in 1930, aged **20**, on a boat to England. Some people just don't give others a chance.

For neutron stars, the same logic applies, but now it's **neutron degeneracy pressure** doing the work rather than electron degeneracy. The equivalent limit is thought to lie somewhere between $2$ and $3\, M_\odot$ — above which even the neutrons can't hold on, and the star collapses to a black hole.

### Neutron Stars

Neutron stars deserve a moment of appreciation, because they are genuinely one of the most extreme objects in the universe.

- Mass: $\sim 1.4\, M_\odot$
- Radius: **~10 km** — smaller than London
- Mean density: $\sim 10^{18}$ kg m$^{-3}$ — comparable to an atomic nucleus
- Surface gravity: $\sim 2 \times 10^{12}$ m s$^{-2}$

To put the surface gravity in context: a 1 kg mass dropped from 1 metre would hit the surface at **2000 km/s** and release energy equivalent to **1000 tonnes of TNT**. Climbing a mountain 1 mm tall would require your entire lifetime's energy output.

Their magnetic fields range from $10^8$ to $10^{11}$ T. For comparison, the strongest continuous magnetic fields produced in a lab on Earth are around 45 T. A single cubic centimetre of a $10^{11}$ T magnetic field contains enough energy to power the UK National Grid for around **5000 years**.

Neutron stars were first discovered as **radio pulsars** in 1967. They spin rapidly and emit beams of radio waves from their magnetic poles — if the beam sweeps past Earth, we detect regular pulses. The most famous is the **Crab pulsar**, the neutron star at the heart of the Crab nebula, remnant