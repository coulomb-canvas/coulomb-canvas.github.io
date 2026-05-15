---
subid: star-structure
title: Stellar Structure
topics: stars
---

We assume stars are spherical and symmetric, like a series of shells on top of each other.

The 'r' subscript means the quantity inside that radius

### Stellar Structure Equations

#### Hydrostatic Equilibrium Equation

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

We can estimate the pressure and density in the core of a star. Not very well though.

Assume that \\( \frac{dP}{dr} = \text{constant} = -\frac{P_\text{core}}{R_*} \\). This is obviously stupid but stay with me for now.


<div class=eqn> \[ \langle \rho \rangle = \frac{M}V = \frac{3M_*}{4\pi R_*^3} \] </div>

<div class=eqn> \[ P_\text{core} = \frac{3G}{4\pi}\frac{M_*}{R_*^4} \] </div>

For the sun that gives \\( 2.7 \times 10^{14} \text{ Nm}^{-2} \\)

#### Mass conservation

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

#### Energy generation conservation

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

#### Energy transport

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

Say I gave you a material with density \\( \rho_1 \\) and temperature \\( T_1 \\). In that material, there's a bubble of that same material with the same density and temperature, rising up very slowly through an environment. Also assume this happens adiabatically (i.e. there is no energy transfer).

As you move up in the star, it will have a different density \\( \rho_a \\) and temperature \\( T_a \\), both of which will be lower (because we are further away from the centre of the star). This means the bubble expands, causing the density and temperature of the bubble to also change (\\( \rho_2 \\) and \\( T_2 \\)). Whether or not convection takes place depends on *how* the density and stuff changes.

If \\( \rho_2 > \rho_a \\), then the bubble just falls back. If not then the bubble keeps rising.

Schwarzchild Criterion:

<div class=eqn> \[ \bigg| \frac{d\ln{T}}{d\ln{P}} \bigg|_\text{advective} > \quad \bigg| \frac{d\ln{T}}{d\ln{P}} \bigg|_\text{radiative} \] </div>

### Equations of state

An *equation of state* is an equation which tells us how pressure, temperate and density are related. There are three main ones for stars

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

Or

<div class=eqn> \[ P = \frac{\rho}{\mu m_H} k_BT \] </div>

#### Radiation

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

#### Degenerate Gas

This is something kinda new!

In an ideal gas, as the temperature goes to zero, so does the pressure. This would be because the particles have no velocity and therefore no momentum.

However, Heisenberg's uncertainty principle tells us that with no momentum, there would be infinite uncertainty in possition. This is obviously unrealistic, so there must be *some* sort of minimum momentum. At very high pressures, the 

What does this mean? In the case of white dwarfs and neutron stars.

A gas becomes degenerate when the average thermal energy is less than the Fermi Energy

<div class=eqn> \[ P = \frac32 k_BT < E_F \] </div>

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

<div class=eqn> \[ \left( \frac3\pi \right)^\frac23 \left( \frac{h^2}{20m_e} \right) n_e^\frac53 \] </div>

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

<div class=eqn> \[ \left( \frac3\pi \right)^\frac13 \left( \frac{hc}{8} \right) n_e^\frac43 \] </div>

### TL;DR

- 
