---
subid: star-atmosphere
title: Stellar Atmosphere
topics: stars
---


Recall from last time that there are two ways lines can form from a spectrum
- **Excitation**: Electrons can move between energy levels, but are still bound to the atom. This releases or absorbs discrete energies
- **Ionisation**: Electrons are completely removed from the atom. This can make something more continuum-ish

For a hydrogen atom, it takes 13.6 electron volts to escape.

As we said before, just because an element is present in the star doesn't necessarily mean the corresponding lines will show up. As to how strongly a particular line will form depends on two things:

- What percentage of atoms are in the right excited level
- What percentage of atoms are in the right ionisation state

Let's start with that first one. How many electrons are in each state?

### The Boltzmann equation

I wanna know what proportion of atoms are in one energy stage, compared to another one. From statistical mechanics, we know that the probability of a particle being in a given microstate (with the 'microstates' in this case being the energy levels) is given by:

<div class=eqn> \[ P_1 = e^{-\frac{E_1}{k_BT}} \] </div>

 The likelihood of an electron being in state 1 with energy \\(E_1\\), compared to the likelihood of an electron being in state 2 with energy \\(E_2\\) is just one divided by the other: 

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

### Fractional Population

Having said that, a probably more useful measurement would be what fraction of all particles have energy \\( E_A \\). Mathematically, this is just \\( \frac{N_A}N \\), which is the number of particles with energy \\( E_A \\) over the total number of particles. The total number of particles is just the sum of the number of particles in each state:

<div class=eqn> \[ N = \sum^\infty_{m=1} N_m \] </div>

We can then use the Boltzmann equation and set \\( N_B \\) to \\( N_m \\). But what about \\( N_A \\), what the heck should we set that too?

Generally speaking, we tend to compare it to ground, \\( n = 1 \\). So that means we set \\( N_A \\) to \\( N_1 \\), giving us:

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

> The Boltzmann Equation should be used when we have multiple excited vs ground atoms

### The Saha Equation

The Boltzmann equation deals with excited atoms, and now we have this far uglier equation to deal with ionisation. The *Saha* equation tells us what proportion of particles are in one ionisation state verses the next one up.

By the way, an *ionisation* state is like... you know how in chemistry how when you write an ion, you write the element followed by the charge in the top corner? Yeah, those are ionisation states. So \\( H \\) (regular old hydrogen) is one ionisation state, and \\( H^+ \\) (hydrogen with an electron removed, so a proton basically) is the next ionisation state. And if such a thing existed, \\( H^{2+} \\) would be the next ionisation state.

So let's say the number of particles in a particular ionisation state (like \\( H \\)) is \\(N_i\\), and the number of particles in the *next* ionisation state (like \\( H^+ \\)) is \\(N_{i+1}\\). Each has their own partition function, \\(U_i(T)\\) and \\(U_{i+1}(T)\\). Then the ratio of states becomesL

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

### Basic radiative quantities in an atmosphere

The atmosphere of a star is considered in terms of its temperature at a given radius (\\( T(r) \\)) and its density at a given radius (\\( \rho(r) \\)).

Let's say we have a ray of light, with a specific wavelength \\( \lambda \\), and a specific wavelength \\( I_\lambda \\). THe *flux* of that light ray would just involve integrating that intensity over the solid angle the light covers:

<div class=eqn> \[ F_\lambda = \int_\Omega I_\lambda \cos{\theta} \ d\Omega \] </div>

<div class=eqn> \[ dE_\lambda =  I_\lambda \cos{\theta} \ dA \ dt \ d\lambda \ d\Omega \] </div>

For a black body, \\( I_\lambda = B_\lambda \\), which is an approximation you'll be using a *lot*. So if in doubt, just replace I with B

#### Absorption

If radiation is moving up a height \\( z \\) and the a material of density \\( \rho \\), then the amount that the intensity changes as you go up. If that intensity is being absorbed, then you should expect it to go down.

You'd also expect the amount it goes doen to increase if the material is denser. Hence

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

Solving this gives us:

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

No you might be thinking "wait a second, why the bloody 'ell have you kept the integral in the exponent? Don't you think it would be nicer for you to just evaluate it?"

Ok, so I think what you are suggesting is that we replace the \\( -\int_0^z \dots dz \\) with just \\( z \\), to give us some thing like this:

<div class=eqn> \[ \frac{I_\lambda}{I_{\lambda,0}} = e^{-\kappa_\lambda \rho z} \] </div>

Right? Well this assumes the density is constant. Which in a star it likely won't be. Having said that, this assumption isn't completely useless. If we do assume this, then the characteristic distance is

<div class=eqn> \[ l = -\frac1{\kappa_\lambda \rho} \] </div>

Which can be thought of as the distance radiation is able to travel in the given atmosphere

#### Scattering

In the case that the energy is scattered instead of absorbed, similar logic applies, except now there's a different constant:

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

If we just wanna know how much light actually gets to us, often times we don't really care whether the energy is actually absorbed or scattered, so then the sigma is absorbed into the kappa, giving us

<div class=eqn> \[ \kappa_{\lambda, \text{total}} = \kappa_\lambda + \sigma_\lambda \] </div>


#### Emission

If there is also some emission taking place from the material, then that also adds to the intensity:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dI_\lambda}{dz} = -\kappa_\lambda \rho I_\lambda + \varepsilon_\lambda \rho  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>


### Optical depth

The *optical depth* measures how much material a particle has to go through at a particular wavelength, which basically means how far into an atmosphere we can see. It is defined

<div class=eqn> \[ d\tau = \kappa_\lambda \rho \ dz \] </div>

Then we can measure the attenuation of intensity as

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

The surface of the star will have some constant optical depth. Exactly *which* constant is very much up to us. SO say we define the edge of the star as the sphere at which \\( \tau_\lambda = 1 \\)

### Sources of Opacity

Time to deal with the kappa

*Opacity* is pretty much anything which gets in the way of photons.

#### Bound-Bound Transition

This is when an electron jumps from one bound level to another bound level, or in other words, a nerdy-ass way to just talk about energy levels transition.


If we consider the spectrum, it will have a single spike at the wavelength of the photon emitted

<div class=eqn> \[ \kappa_\lambda^\text{bound-bound} \propto g_{m,n} N_n \psi(\lambda) \] </div>

Where \\( \psi(\lambda) \\) is the line



Now let's be honest. We're never gonna get a single localised pulse, that would be too easy! In reality, we get something called broadening

- Natural Broadening comes from the uncertainty principle. Since the election is excited for a finite amount of time, then we can only have an uncertain value of energy 
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

#### H minus opacity

This is just hydrogen with an extra electron, which is very unstable and easy to ionise.

In solar‑type stars, the main continuum opacity in the optical is due to H⁻


### TL;DR

- 
