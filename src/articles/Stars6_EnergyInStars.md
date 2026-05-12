---
subid: star-energy
title: Energy In Stars
topics: stars
---

Think of the star like a box. This box has thermal energy \\( U \\) and gravitational potential energy \\( \Omega \\). There is an input of energy via nuclear fusion, and an output of energy, via radiation, which is the luminosity.

The thermal energy and the gravitational potential energy are related via the Virial Theorem

### Virial theorem

At a particular point, we know:

<div class=eqn> \[\Omega_\text{point} = - \frac{GMm}{r} \] </div>

Consider a sphere with radius r, and we consider a shell with width dr.

<div class=eqn> \[ d\Omega_\text{point} = - \frac{GM_r dm_\text{shell}}{r} \] </div>

We know that

<div class=eqn> \[ dm_\text{shell} = 4\pi r^2 \rho dr \] </div>

So

<div class=eqn> \[ \int_V \Omega_\text{point} = - \int_0^R 4\pi r^2 \rho \frac{GM_r}{r} dr \] </div>

<div class=eqn> \[ \int \Omega dV = - \int_0^R 4\pi \rho GM_r r dr \] </div>

Then by using the hydrostatic equation

<div class=eqn> \[ \int \Omega dV = 4\pi \int_0^R r^3 \frac{dP}{dr} dr \] </div>

Which gives

<div class=eqn> \[ \int \Omega dV = -3 \int P dV \] </div>

Assume P and \\( \Omega \\) balance at each point, which means we can ignore the integrals:

<div class=eqn> \[ \Omega = -3P \] </div>

Then with the equation of states:

<div class=eqn> \[ P = nk_BT, \; U = \frac32 k_B T \; U = \frac{3P}2 \] </div>

Leaving:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \Omega = -2U \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

How can we use this? Take the total energy of the star:

<div class=eqn> \[ E = U + \Omega \] </div>

With the Virial theorem:

<div class=eqn> \[ E = \frac{\Omega}2 \] </div>

E = -U, but U can't be negative, meaning the energy is less than zero, showing the star is gravitationally bound

If energy increases, \\( \Omega \\) gets bigger (star expands), and U gets smaller (temperature drops). If energy decreases, \\( \Omega \\) gets smaller, and U gets bigger (temperature goes up).

### Timescales

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \text{timescale} = \frac{ \text{quantity}}{ \text{rate of change}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

#### Gravitational

The "dynamical" timescale

<div class=eqn> \[ \begin{align} \tau 
    &= \frac{R_*}{v_\text{escape}} \\[6pt]
    &= \sqrt{\frac{R^3}{2GM}}
    \end{align} \] </div>

#### Thermal

The "Kelvin-Helmholtz" timescale

<div class=eqn> \[ \begin{align} \tau 
    &= \frac{U}{L} \\[6pt]
    &= \frac{GM^2}{2RL}
    \end{align} \] </div>

#### Nuclear

<div class=eqn> \[ \begin{align} \tau 
    &= \frac{E_\text{nuclear}}{L} \\[6pt]
    &= \frac{\eta X m_\text{core} c^2}{L}
    \end{align} \] </div>

### Binding energy

...

Reaction rate is determined by the rate of the slowest process

<div class=eqn> \[ R_{1, 2} = n_1 n_2 \sigma v \] </div>

For quantum tunnelling, \\( \sigma = e^{-2\pi^2\frac{U_0}{E}} \\)

<div class=eqn> \[ \begin{align} R_{pp} 
    &\propto \rho_1 \rho_2 e^{-2\pi^2\frac{U_0}{E}} e^{-\frac{E}{k_BT}}
    &\propto \rho^2 X_H^2 T^4 
    \end{align} \] </div>

<div class=eqn> \[ \varepsilon_{pp} = \rho X_H^2 T^4  \] </div>

<div class=eqn> \[ \varepsilon_{CNO} = \rho X_H X_{CNO} T^4  \] </div>

### TL;DR

-
