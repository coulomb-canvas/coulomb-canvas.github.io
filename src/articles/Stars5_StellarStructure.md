---
subid: star-structure
title: Stellar Structure
topics: stars
---

Let's take a star. We will be modelling stars as spherical and symmetric, like a series of shells on top of each other (on an onion ting).

The 'r' subscript means the quantity inside that radius. So \\( M_r \\) means mass within the radius \\( r \\) and \\( L_r \\) means the luminosity coming from the mass within radius \\( r \\).

### Stellar Structure Equations

When dealing with a star, you need an equation of state, an opacity law, and one of these 4 coupled ODES:

1. Hydrostatic Equilibrium
2. Mass Conservation
3. Energy Generation Conservation
4. Energy Transport

#### Hydrostatic Equilibrium Equation

This is the formula which makes all the big objects in the sky round and smooth, like a marble. The force of gravity tries to pull the mass of a planet / star / moon in, but the pressure that creates causes another force, pushing it out. 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dP}{dr} = - \frac{GM_r \rho}{r^2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

Without the pressure, the mass would just collapse on a dynamical free‑fall timescale.

We can estimate the pressure and density in the core of a star. Not very well though. Assume that \\( \frac{dP}{dr} = \text{constant} = -\frac{P_\text{core}}{R_*} \\). This is obviously stupid but stay with me for now.

<div class=eqn> \[ \langle \rho \rangle = \frac{M}V = \frac{3M_*}{4\pi R_*^3} \] </div>

Then

<div class=eqn> \[ P_\text{core} = \frac{GM_* \langle \rho \rangle}{R_*} = \frac{3G}{4\pi}\frac{M_*^2}{R_*^4} \] </div>

For the sun that gives \\( 2.7 \times 10^{14} \text{ Nm}^{-2} \\)

#### Mass conservation

This is basically a fancy way of saying mass = density times volume. If we take a thin sheet of mass, \\( dM_r \\), the volume is the surface area times the infinitely small radius \\( dr \\), giving \\( 4\pi r^2 \ dr \\). Then just times that by the density to give you 

<div class=eqn> \[ dM_r = 4\pi r^2 \rho(r) \ dr \] </div>

Then just divide be \\( dr \\) to get:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dM_r}{dr} = 4\pi r^2 \rho(r) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

#### Energy Generation Conservation

This is kinda just a rebranding of the previous question. Before we had the mass per unit distance. If we wanna get the luminosity, we take that same equation... and then multiply it by the amount of energy a unit of mass generates. We call that \\( \varepsilon \\).

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dL_r}{dr} = 4\pi r^2 \rho \varepsilon \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

#### Energy Transport (Radiation)

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ L_r = \frac{16\pi r^2 a \tau}{3 \kappa \rho} T^3 \frac{dT}{dr} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

#### Convection

This is the physical movement of material. Convection and radiation are kinda like rivals, fighting each other for domination

Say I gave you a material with density \\( \rho_1 \\) and temperature \\( T_1 \\). In that material, there's a bubble of that same material with the same density and temperature, rising up very slowly through an environment. Also assume this happens adiabatically (i.e. there is no energy transfer), meaning it's pressure changes.

As you move up in the star, it will have a different density \\( \rho_a \\) and temperature \\( T_a \\), both of which will be lower (because we are further away from the centre of the star). This means the bubble expands, causing the density and temperature of the bubble to also change (\\( \rho_2 \\) and \\( T_2 \\)). Whether or not convection takes place depends on *how* the density and stuff changes.

If \\( \rho_2 > \rho_a \\), then the bubble just falls back. If not then the bubble keeps rising.

Schwarzchild Criterion:

<div class=eqn> \[ \bigg| \frac{d\ln{T}}{d\ln{P}} \bigg|_\text{adiabatic} > \quad \bigg| \frac{d\ln{T}}{d\ln{P}} \bigg|_\text{radiative} \] </div>

### Equations of state

An *equation of state* is an equation which tells us how pressure, temperate and density are related. There are three main ones for stars

1. The Ideal Gas Law
2. Radiation Pressure
3. Degeneracy Pressure

#### The Ideal Gas Law

Here's a familiar face. If we assume we have a gas of infinitely small particles which collide elastically, this relation is true:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ P = nk_BT \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

You might be wondering "where the heck did the V go?" It's absorbed into n, which is number density here

Or, we can write

<div class=eqn> \[ P = \frac{\rho}{\mu m_H} k_BT \] </div>

This is the dominant pressure source in normal main‑sequence stars, outside extremely dense cores.

#### Radiation

This was derived before

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ P = \frac13 a T^3 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

In very massive, hot stars the radiation pressure can be a significant fraction of the total.

#### Degenerate Gas

This is something kinda new!

In an ideal gas, as the temperature goes to zero, so does the pressure. This would be because the particles have no velocity and therefore no momentum.

However, Heisenberg's uncertainty principle tells us that with no momentum, there would be infinite uncertainty in possition. This is obviously unrealistic, so there must be *some* sort of minimum momentum. 

No two electrons can occupy the same state. So if there is a high enough density, eventually all the low energy states are filled up, meaning some electrons are forced into higher energy states even when there is no thermal energy, \\( T = 0 \\). This means there is a minimum spread in momentum. 

So unlike an ideal gas, as \\( T→0 \\) the pressure does *not* go to zero if the gas is degenerate. A gas becomes degenerate when the average thermal energy is less than the Fermi Energy

<div class=eqn> \[ k_BT \ll E_F \] </div>

For a completely degenerate, non‑relativistic electron gas, the pressure scales as

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ P \propto n_e^\frac53 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

Or more precisely, \\( \left( \frac3\pi \right)^\frac23 \left( \frac{h^2}{20m_e} \right) n_e^\frac53 \\). This is the pressure which supports white dwarves, the lighter ones anyway.

At extremely high densities, then the momentums become bigger and bigger until you reach relativistic momenta, and the scaling changes to

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ P \propto n_e^\frac43 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

Or more precisely, \\( \left( \frac3\pi \right)^\frac13 \left( \frac{hc}{8} \right) n_e^\frac43 \\). This is relevant to very massive white dwarfs approaching the Chandrasekhar limit.

### TL;DR

- 
