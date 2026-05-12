---
subid: star-formation
title: Star Formation
topics: stars
---

Stars form when big clouds of gas collapse under their own gravity. But what conditions does this require

<div class=eqn> \[ 2U + \Omega = 0 \] </div>

So then, if \\( 2U > |\Omega| \\), the cloud will expand, but if \\( 2U < |\Omega| \\), the cloud collapses (into a star)

<div class=eqn> \[ \Omega_\text{total} = -\int^R_0 \frac{GM_r(r)}{r} \rho(r) \ 4\pi r^2 dr \] </div>

With some maths:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \Omega_\text{total} = -\frac35 \frac{GM^2}{r} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

What about the total thermal energy?

The mass of the cloud for it to take place:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ M_J > \left( \frac{5 k_B T}{\mu m_H G} \right)^{3/2} \left( \frac{3}{4 \pi \rho} \right)^{1/2}  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

Within a cloud, stars form with this distribution:

<div class=eqn> \[ f(M) \ dm \propto M^{-\gamma} \] </div>

Notice the negative exponential, that means there are more low mass stars than high mass stars. This is due to cloud fragmentation

#### Protostar

This is the first stage

How can the protostar overcome the angular momentum?

After the initial collapse, the protostar begins to get hot enough to begin fusion. This isn't PP1, since that requires a bunch of energy, but rather deuterium burning. This is easier as it doesn't require proton to neutron decay.

Timescale is about 10^7

How long does it stay as a protostar? After that, it takes some time getting used to thermal energy, meaning the core gets hotter. However the outer layer does still radiate heat

#### Main sequence

The hydrogen burns (PP1) and overtime the helium builds up in the core. That means \\( \mu \\) moves from \\( \frac12 \\) to \\( \frac43 \\). So if µ goes up, the pressure goes down. This causes the temperature of the core to increase

The timescale (nuclear) is about 7x10^9 years, although it's larger for a smaller mass star and smaller for a larger mass star.

Scaling Law for Low-Mass Stars:

<div class=eqn> \[ \begin{align*}
L &\propto \frac{r^2}{\kappa \rho} T^3 \frac{\mathrm{d}T}{\mathrm{d}r} \\
\kappa &\propto \rho T^{-3.5} \\
L &\propto \frac{r^2 T^{6.5}}{\rho^2} \frac{\mathrm{d}T}{\mathrm{d}r}
\end{align*} \] </div>

#### Star clusters

These are useful because the stars all formed at similar times, have similar composition, and are a similar distance

Younger cluster (Pleriades, 100Myr)

- Lower mass stars may not yet have finished forming
- Also 30pc further away, so we may not have seen the faintest stars

Older cluster (Hyades, 600Myr)

- There's a turnoff point, where stars seem to stop forming
- Hotter stars have already moved off the main sequence

Blue stragglers break the model

#### Post Main-Sequence Evolution

For lower mass stars, we first get the subgiant branch, where there is a helium core and a hydrogen shell. The core exhauses hydrogen first, since it has a higher temperature. The burning shell is essentially feeding helium into the star. 

Since the core is no longer burning (it's inert, no more fusion), that means the luminosity is zero. From ages ago, we know that luminosity is proportional to \\( \frac{dT}{dr} \\), so if L = 0, then \\( \frac{dT}{dr} = 0 \\). That means it is isothermal (the temperature is the same everywhere).

Eventually the core contracts and becomes degenerate. This triggers the red giant branch

#### Red Giant Branch

The core continues to contract. But as it does so, GPE is added into the envolope, causing it to expand.

The temperature of the core increases, causing the temperature of the shell to increase, causing the luminosity to increase.

The luminosity is set by the fusion, and the radius is ecpanding. That means the temperature has to drop

THe envelope becomes convective, due to the higher gradient between the hot core and the cooler elvelope. At the end of the red giant branch, the core temperature is high enough to ignite helium fusion.

#### Helium flash

The core is now degenerate, there is no self-regulation and there is now runaway fusion. This happens in only a few seconds. The energy released is pretty big, but it's mostly absorbed by outer layers. This ends when the degeneracy is lifted

#### Horizontal Branch

Core Helium burns to carbon and oxygen. The burning hydrogen shell is still there. The time scale for the horizontal branch is about 10% of that of the main sequence

#### Asymptotic Giant branch

Now the helium in the core has been exhausted, leaving only degenerate carbon and oxygen. This time, helium is burning in a shellm (and hydrogen is burning in a shell oiutside that). These alternate in thermal pulses.

This is because when helium burns, the hydrogen shell expands and cools. This means there is less hydrogen fusion. Eventually the helium depletes, meaning the hydrogen shell reignites. Then the hydrogen shell forms more helium, which resparks the helium core.

#### Post AGB

THere are planetary nebulae from ejected material, and there is now an exposed hot carbon and oxygen core, forming a white dwarf. These collapse past a certain mass, \\( M_{chandra} \approx 1.4M \\)


### High Mass Stars

These are similar to low-mass stars up until AGB, except it's faster and there is no helium flash. 

However, with so much mass, fusion is able to continue even unto iron. Eventually we end up with an iron core, still degenerate. If the core has mass higher than the chandra mass, the core will collapse and form a supernova.

Since this happened due to gravity, we can calculate the dynamical tiimescale. The core collapses so quickly, the outer star doesn't 'know' it's happened. The strong nuclear force causes a bounceback, forming the supernova, releasing energy of about 10^46 joules, only about 1% of which is kinetic. The rest are neutrinos.

These supernovae are called *core collapse supernovae*, with types II, 1b and 1c.

THe outer layers fall slower, and are suspended above the collapsing core, and a large amount of \\( \alpha \\)-elements are formed

### Remnants

For stars less than 25 solar masses, a neutron star is formed, supported by degeneracy pressure. The maximum mass is about 3 solar masses (about 10km radius), any larger and a black hole would form instead.




### TL;DR

-
