---
subid: star-energy
title: Energy In Stars
topics: stars
---

Think of the star like a box. This box has thermal energy \\( U \\) and gravitational potential energy \\( \Omega \\). There is an input of energy via nuclear fusion, and an output of energy, via radiation, which is the luminosity.

The thermal energy and the gravitational potential energy are related via the Virial Theorem

### Virial theorem

For a point mass, we can use the regular equation we all know and love for gravitational potential energy:

<div class=eqn> \[\Omega_\text{point} = - \frac{GMm}{r} \] </div>

Remember from last time, that we are treating stars as a bunch of \\( dr \\) thick shells. Each shell is a sphere with radius r, with a mass \\( dm_\text{shell} \\). So to get an infinitely small change in gravitational potentiall energy, just put a d in front of the \\( \Omega \\) and the \\( m \\), like so:

<div class=eqn> \[ d\Omega_\text{point} = - \frac{GM_r dm_\text{shell}}{r} \] </div>

We know from the mass conservation equation we had last time (and from simple reasoning tbf) that the infinitely small change in mass is given by the surface area of the sphere, multiplied by the infinitely small width \\( dr \\)

<div class=eqn> \[ dm_\text{shell} = 4\pi r^2 \rho dr \] </div>

Putting that in, and then integrating both sides going radially outwards from 0 to R, gets us:

<div class=eqn> \[ \begin{align} \int_V d\Omega_\text{point} 
    &= - \int_0^R 4\pi r^2 \rho \frac{GM_r}{r} \ dr \\[6pt]
    &= - \int_0^R 4\pi GM_r  \rho r \ dr 
    \end{align} \] </div>

Then by using the hydrostatic equation, we can get an alternative value for \\( GM_r \rho \\)

<div class=eqn> \[ \int d\Omega = 4\pi \int_0^R r^3 \frac{dP}{dr} dr \] </div>

And at this point, you just have to integrate by parts, which is long and annoying. But when you do, it gives

<div class=eqn> \[ \Omega  = -3 \int P dV \] </div>

Assume P and \\( \Omega \\) balance at each point, which means we can ignore the integrals:

<div class=eqn> \[ \Omega = -3PV \] </div>

Then with the equation of states:

<div class=eqn> \[ P = nk_BT, \quad U = \frac32 k_B T, \quad U = \frac32 PV \] </div>

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

This is mostly revision, but I'll go over it very quickly just for completeness.

We know from Einstein's famous equation that a particle has a total energy of \\( E = mc^2 \\). However, if you were to actually add up the masses of all the protons and neutrons and then multiply by \\( c^2 \\), you'll find that the number you get there is slightly different

<div class=eqn> \[ E = mc^2 \geq (Zm_\text{proton} + Nm_\text{neutron})c^2  \] </div>

That difference in energy is the *binding energy*, which is the energy required to keep the particles all together. We can then write an expression for the binding energy:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ E_\text{binding} = (Zm_\text{proton} + Nm_\text{neutron} - m_\text{nucleus})c^2 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

<div class="container">
    <div class="text">
        If you calculate the ratio between binding energy and total nucleons, the gradient is how much energy we get out of the reaction. If we go from \( 4 \ ^1_1H \to \ ^4_2He \), then the energy released from that interaction is \( 0.007 m_H \) per nucleon, which is where the \( \eta \) we had before came from
    </div>
    <div class="image">
    <div class="image-floater">
        <div class="image-box">
        <img src="images/Stars/Binding graph.png" class="pop-image" style="width: 300px"/>
        </div>
        <span class="image-tooltip" style="left:-120%;"> <div style="color: #006aff; 
        font-size:45px; text-decoration: underline; text-underline-offset: 7px;">
        Figure 1: Binding Energy</div><div style="color:white; font-size:20px; line-height: 1.2;">
        ...</div></span>
    </div>
    </div>
</div>

Now what actually happens in the PP 1 chain?

<div class="container">
    <div class="image">
        <div class="image-floater">
            <div class="image-box">
            <img src="images/Stars/PP 1.png" class="pop-image" style="width: 300px"/>
            </div>
            <span class="image-tooltip" style="left:-120%;"> <div style="color: #006aff; 
            font-size:45px; text-decoration: underline; text-underline-offset: 7px;">
            Figure 2: PP1</div><div style="color:white; font-size:20px; line-height: 1.2;">
            ...</div></span>
        </div>
    </div>
    <div class="text">
        Remember that these reactions are governed by conservation laws (of momentum, energy, charge and nucleon/lepton numbers). The most common chain is the <em>PP-1 chain</em>.
        <p>First, 2 protons fuse into deuterium, a positron and an electron neutrino. One of those protons becomes a neutron via beta decay. Then another proton fuses to form Helium (with only one neutron) and energy. Then 2 of those collide, creating Helium, and some of the protons break off.</p>
    </div>
</div>

There is also PP-2 and PP3. 

The reaction rate of any one of these chains is determined by the rate of the slowest process. For PP-1, it's the beta decay of the proton into the neutron. This happens once every 10 BILLION years per proton, which goes to show just how many protons you actually need.

For 2 protons, to collide, you need them to be moving fast enough to overcome the coulomb potential. How fast does this need to be? We can calculate this by comparing the thermal energy and the Coulomb potential:

<div class=eqn> \[ \frac32 k_BT = \frac{Z_1 Z_2 e^3}{4π\varepsilon_0 r} \] </div>

Solving for \\( T \\) gives us \\( T \sim 10^{10} \text{K} \\), which is way too high for the core temperature of a star. So how does the sun do it?

Answer, quantum mechanics, specifically quantum tunneling. From the Heisenberg uncertainty principle, if \\( \Delta x \\) is large enough, it can cross the gap.

The reaction rate therefore depends on the density of particles (the more there are, the better), the size of the particles' collision areas (the particles have a small range around them, at which we say the particles 'collided', donated \\( \sigma \\)) and finally how quickly those particles are moving.

<div class=eqn> \[ R_{1, 2} = n_1 n_2 \sigma v \] </div>

<div class="container">
    <div class="text">
        The probability of quantum tunnelling is proportional \( e^{-2\pi^2\frac{U_0}{E}} \). The U is the thermal energy, which is higher with higher temperature. Then there is also the Maxwell-Boltzmann velocity probability, which is proportional to \( e^{-\frac{E}{k_BT}} \). The point at which these two probabilities cross over is the Gamow peak, and it is these particles, which have enough energy for quantum tunnelling, but not too much so that they are still within the Maxwell-Boltzmann distribution, which are involved in the reaction. Therefore the more these 2 overlap, the more particles there are which can collide, and the greater the rate of reaction there is.
    </div>
    <div class="image">
        <div class="image-floater">
            <div class="image-box">
            <img src="images/Stars/Sigma Gamow.png" class="pop-image" style="width: 300px"/>
            </div>
            <span class="image-tooltip" style="left:-120%;"> <div style="color: #006aff; 
            font-size:45px; text-decoration: underline; text-underline-offset: 7px;">
            Figure 1: Binding Energy</div><div style="color:white; font-size:20px; line-height: 1.2;">
            ...</div></span>
        </div>
    </div>
</div>

In the case of the star, you can use regular densities rather than number densities

<div class=eqn> \[ \begin{align} R_{pp} 
    &\propto \rho_1 \rho_2 e^{-2\pi^2\frac{U_0}{E}} e^{-\frac{E}{k_BT}} \\[6pt]
    &\propto \rho^2 X_H^2 T^4 
    \end{align} \] </div>

(Don't worry about having to prove this)

The generation rate per unit mass is the rate of reation per unit mass

<div class=eqn> \[ \varepsilon_{pp} = \rho X_H^2 T^4  \] </div>

<div class=eqn> \[ \varepsilon_{CNO} = \rho X_H X_{CNO} T^4  \] </div>

As hydrogen fuses to helium, the core or the star gets denser and denser, causing it to shrink and get warmer. At a high enough temperature, helium is able to fuse. This is done via the triple alpha reaction:

<div class=eqn> \[ 3 \ ^4_2 He \to \ ^{12}_6 C + \gamma  \] </div>

You won't need to remember these epsilons, just know that with higher temperature you are able to fuse heavier elements (because there are higher coulomb barriers needed to overcome them).

### TL;DR

-
