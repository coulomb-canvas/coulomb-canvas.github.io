---
subid: star-atmosphere
title: Stellar Atmosphere
topics: stars
---


Recall from last time that there are two ways lines can form from a spectrum
- Excitation
- Ionisation

For a hydrogen atom, it takes 13.6 electron volts to escape.

How many electrons are in each state?

### The Boltzmann equation

The likelihood of an electron being in state 1 with energy \\(E_1\\), compared to the likelihood of an electron being in state 2 with energy \\(E_2\\) is: 

<div class=eqn> \[ \frac{P_1}{P_2} = e^{-\frac{E_1-E_2}{k_BT}} \] </div>

This means that with infinite temperature (and therefore infinite energy), each state is equally likely

\\( g_A \\) is the number of states with energy \\( E_A \\). So if we want to know the probability for a given *energy* rather than a given *state*, we must include these g's in the equation:


<div class=eqn> \[ \frac{P_1}{P_2} = \frac{g_1}{g_2}e^{-\frac{E_1-E_2}{k_BT}} \] </div>

With a large amount of atoms, the probabilities are the same as the number ratios, so

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{N_B}{N_A} = \frac{g_B}{g_A}e^{-\frac{E_B-E_A}{k_BT}}  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: The Boltzmann Formula
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Having said that, a probably more useful measurement would be \\( \frac{N_A}N \\), which is the number of particles with energy \\( E_A \\) over the total number of particles. The total number of particles is just:

<div class=eqn> \[ N = \sum^\infty_{m=1} N_m \] </div>

By using the Boltzmann equation and setting \\( N_B \\) to \\( N_m \\) and \\( N_A \\) to \\( N_1 \\), we get:

<div class=eqn> \[ \begin{align} \frac{N_m}{N_1} &= \frac{g_m}{g_1}e^{-\frac{E_m-E_1}{k_BT}} \\[6pt] 
    \therefore N_m &= N_1 \frac{g_m}{g_1}e^{-\frac{E_m-E_1}{k_BT}} \end{align} \] </div>

Then just chuck in the sum and then we get

<div class=eqn> \[ N = \frac{N_1}{g_1} \sum^\infty_{m=1} g_m e^{-\frac{E_m-E_1}{k_BT}} \] </div>

We can call this big ugly sum the partition function, which is represented with a \\( U(T) \\) instead of the \\( Z \\) we are used to. God knows why, just charge it for now.

Then we end up with this relationship:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{N_m}{N} = \frac{g_m}{U(T)}e^{-\frac{E_m-E_1}{k_BT}}  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: ...
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### The Saha Equation

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{N_{i+1}}{N_i} = \frac{2}{n_e} \frac{U_{i+1}}{U_i} \left( \frac{2\pi m_e k_BT}{h^2} \right)^\frac32 e^{-\frac{\chi_i}{k_BT}}  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: The Saha Equation
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Where \\( n_e \\) is the number of free electrons (the more free electrons there are, the easier it is for them to recombine with a nucleus, meaning that there will be less higher energy nuclei) and \\( \chi_i \\) is the energy required to ionise it from i to i+1

### ...

The atmosphere of a star is considered in terms of its temperature at a given radius (\\( T(r) \\)) and its density at a given radius (\\( \rho(r) \\)).

Let's say we have a ray of light, with a specific wavelength \\( \lambda \\), and a specific wavelength \\( I_\lambda \\). THe *flux* of that light ray would just involve integrating that intensity over the solid angle the light covers:

<div class=eqn> \[ F_\lambda = \int_\Omega I_\lambda \cos{\theta} \ d\Omega \] </div>

<div class=eqn> \[ dE_\lambda =  I_\lambda \cos{\theta} \ dA \ dt \ d\lambda \ d\Omega \] </div>

For a black body, \\( I_\lambda = B_\lambda \\), which is an approximation you'll be using a *lot*. So if in doubt, just replacec I with B

#### Absorption

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dI_\lambda}{dz} = -\kappa_\lambda \rho I_\lambda  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Solve

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{I_\lambda}{I_{\lambda,0}} = e^{-\int_0^z \kappa_\lambda \rho dz}  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class=eqn> \[ \frac{I_\lambda}{I_{\lambda,0}} = e^{-\kappa_\lambda \rho z} \] </div>

And the characteristic distance is

<div class=eqn> \[ l = -\frac1{\kappa_\lambda \rho} \] </div>

Why the hell have I kept the ugly integral there instead of solving it?

In the case that we do assume density is constant, then:

#### Scattering

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dI_\lambda}{dz} = -\sigma_\lambda \rho I_\lambda  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

If we just wanna know how much light actually gets to us, often times we don't really care whether the energy is actually absorbed or scattered, so then the sigma is absorbed into the kappa


#### Emission

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dI_\lambda}{dz} = -\varepsilon_\lambda \rho  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>


### Optical depth

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{I}{I_0} = e^{-\tau_\lambda}  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

\\( \tau \\) increases with the amount of material which is absorbing the light. So in a way, you can think of the optical depth as how far into a material (in this case, the star) we can see.

The surface of the star will have some constant optical depth. Exactly *which* constant is very much up to us. SO say we define the edge of the star as the sphere at which \\( \tau_\lambda = 1 \\)

### Sources of Opacity

Anything which can block the photons

#### Bound-Bound Transition

Energy levels transition

If we consider the spectrum, it will have a single spike at the wavelength of the photon emitted

<div class=eqn> \[ \kappa_\lambda^\text{bound-bound} \propto g_{m,n} N_n \psi(\lambda) \] </div>

Now let's be honest. We're never gonna get a single localised pulse, that would be too easy!

- Natural Broadening comes from the uncertainty principle. Since the election is exciter for a finite amount of time, then we can only have an uncertain value of energy

<div class=eqn> \[ \Delta E \Delta t = \hbar \] </div>

<div class=eqn> \[ \Delta E = \frac{hc}\lambda - \frac{hc}{\lambda + \Delta\lambda} = \frac{\hbar}t \] </div>

That means

<div class=eqn> \[ \Delta \lambda = \frac{\lambda^2}{2\pi c} \left( \frac1{\Delta t_n} + \frac1{\Delta t_m} \right) \] </div>

- Doppler broadening  comes from the motion of the absorbing atom. If the atom follows a Maxwell-Boltzmann distribution, then the most probable velocity is 

<div class=eqn> \[ v = \sqrt{\frac{2k_BT}{m}} \] </div>

That gives

<div class=eqn> \[ \Delta\lambda = \frac{2\lambda}c \sqrt{\frac{2k_BT}{m}} \] </div>

- Pressure broadening goes back to the uncertainty principle. The higher the pressure, the more collisions, meaning the less time electrons have at a given state. So like before, a shorter time means a lower uncertainty in time, meaning more uncertainty in energy and therefore in wavelength.

Now how do we get this change in time? It's gonna be something like the mean free time over the average velocity.

<div class=eqn> \[ l_\text{atom} = \frac1{\sigma n} \] </div>

<div class=eqn> \[ \Delta\lambda = \frac{\lambda^2 n \sigma}{c \pi} \sqrt{\frac{2k_BT}{m}} \] </div>

- Stellar Rotation

#### Bound-Free Transition

Ionisation.

Instead of looking like a single localised peak, this looks like a continuum with a bunch of cut off points. Think of it like this, we need an energy \\( \chi_i \\) to ionise the electron. Therefore, any energy greater than that (ie lower wavelength) will be able to ionise it. That keeps on happening until you have enough energy to ionise the next energy state

#### Free-Free Absorption

Photon absorbed by a free electron, in the presence of a nearby ion.

Wait, a nearby ion? Why the hell do we need a nearby ion?

Well let's try and conserve the energy:

<div class=eqn> \[ \begin{align}
E &= p_\gamma c + m_ec^2 \\[6pt]
&= \sqrt{m_e^2 c^4 + p_e^2 c^2}
\end{align} \] </div>

For momentum to be conserved, \\( p_\gamma = p_e \\), which is only solvable if \\( m_e = 0 \\) or \\( p_\gamma = 0 \\), neither of which makes any bloody sense.

Therefore, the ion must take some of the momentum. But let's be real for a sec... what are the odds of that?

I mean think about it. Electrons are pretty much always moving, so it's not like it can just sit back and wait for an ion or something.

The time the electron spends near an ion is inversely proportional to its speed. Then by using \\( v = \sqrt{\frac{2k_BT}{m}} \\), we can see that it's proportional to \\( T^{-\frac12} \\)

The amount of systems which are able to absorb the photon will depend on the density. Put it together you get:

<div class=eqn> \[ \kappa \propto \nu^{-3} \rho T^{-\frac12} \] </div>

This mostly happens at the peak of B, where \\( \lambda_\text{peak}T = \frac{hc}{\nu_\text{peak}}T = \text{constant} \\). That means \\( \nu \propto T \\) and so:

<div class=eqn> \[ \kappa \propto \rho T^{-\frac72} \] </div>

#### Scattering

1. Rayleigh scattering - low energy photons elastically collide with atoms <div class=eqn> \\[ \sigma_\text{Rayleigh} \propto \frac1{\lambda^4} \\] </div>
2. Compton scattering - inelastic scattering of a photon on an electron
3. Thompson scattering - elastic scattering of a photon on an electron, which is Compton scattering at very low energy

#### H minus

This is just hydrogen with an extra electron, which is very unstable and easy to ionise


### TL;DR

- 
