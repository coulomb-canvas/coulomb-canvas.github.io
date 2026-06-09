---
subid: grand-canon-en
title: The Grand Canonical Ensemble
topics: stat
---

So far we hve had

- **MICROCANONICAL ENSEMBLE** The possible states in a completely isolated thermodynamic system. It is characterised by a fixed number of particles (\\(N\\)), a fixed volume (\\(V\\)), and a constant total energy (\\(E\\)). Because it cannot exchange energy or matter with its surroundings, its total energy is strictly conserved.
- **CANONICAL ENSEMBLE** The possible states of a system in thermal equilibrium with a heat bath at a constant temperature \\(T\\). It assumes the system's particle number (\\(N\\)) and volume (\\(V\\)) remain fixed, while energy fluctuates.

Unlike the microcanonical ensemble (which is completely isolated) and the canonical ensemble (which allows heat to be exchanged), the *grand canonical ensemble* now allows for the exchange of particles with a reservoir, not just volume. 

### Chemical Potential & Boltzmann-Gibbs Factors

The derivations are pretty much the exact same as the ones used for the microcanonical and canonical ensembles. Start off with the total energy and particle number as being the sum of the energy and particle number in the system (\\( E_\nu \\) and \\( N_\nu \\)) and the energy and particle number in the reservoir (\\( E_R \\) and \\( N_R \\))

<div class="eqn"> \[
    E = E_R + E_\nu, \quad N = N_R + N_\nu
\] </div>

The probability that the system is in microstate \\( \nu \\) is proportional to the number of states the reservoir could be in with this energy and particle number, \\( \Omega_R(E_R, N_R, V) \\), 'cus like, the more states there are, the more like it is for there to be a \\( \nu \\) state:

<div class=eqn> \[ p_ν ∝ \Omega_R (E−E_ν, N−N_ν, V) = e^{\frac{S_R(E−E_ν, N−N_ν, V)}{k_B}}\] </div>

Now at this point, we should use the good ol' <span class="definition" data-definition="\[ f(x-a) = f(x) - a\frac{df}{dx} \]">Taylor expansion</span>, except now that we have two variables we are trying to approximate (\\( E_\nu \\) and \\( N_\nu \\)), we have to use an upgraded version of the Taylor series, which includes partial derivatives:

<div class=eqn> \[ 
    S_R(E - E_\nu, N - N_\nu, V) \approx S_R(E, N, V)
    - E_\nu \frac{\partial S_R}{\partial E}
    - N_\nu \frac{\partial S_R}{\partial N}
\] </div>

Put that into our equation for probability from like 30 seconds ago, and we get:

<div class=eqn> \[ 
    p_\nu \propto \exp{\left(
    -\frac{E_\nu}{k_B}\frac{\partial S_R}{\partial E}
    -\frac{N_\nu}{k_B}\frac{\partial S_R}{\partial N}
    \right)}
\] </div>

Well, well, well, what do we have here? We know that \\( \frac{\partial S_R}{\partial E} = \frac1{T} \\) from last time, but what on *earth* is that \\( \frac{\partial S_R}{\partial N} \\) supposed to be?

Well, let me tell you. This is related to a brand new quantity, \\( \mu \\), which is the *chemical potential*. 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \mu = -T \frac{\partial S}{\partial N} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

A way to think about it is the *amount of energy required to add a partice to the system*. That's a good way to think about it because, well, that's exactly what it is. But another way to think about it, which is arguably better for the topic we are looking at in my opinion, is the *change in a system's free energy*

<div class=eqn> \[ 
    \mu = \Delta U - T\Delta S
\] </div>

*Free energy* is the amount of energy a system has which is actually free to do work. Now this formula up here won't be used yet, but just keep it in mind, yeah? Cool beans!

Naturally, a system wants to decrease the amount of free energy it has ('cus it wants to use the energy to do things, y'know? S'no good just sitting there, right?).

Anywho, by placing that new chemical potential inside our probability thing, we get the *Boltzmann-Gibbs Factor*:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ p_\nu \propto e^{-\beta(E_\nu - \mu N_\nu)} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

And as usual, we get the *partition function just by summing up all the probabilities:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ Z(T, V, \mu) = \sum_\nu e^{-\beta(E_\nu - \mu N_\nu)} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

> **CANONICAL ENSEMBLE** The set of microstates of the system, which now allows *energy* and *particle number* to fluctuate.<br><br> **CHEMICAL POTENTIAL, \\( \mu \\)** The change in a system's *free energy*.

### The Grand Potential

Now that particles can be added and removed from the system, there is another source of energy:

<div class=eqn> \[ 
    TdS ≥ dE + dW − µdN
\] </div>

In the same way the canonical ensemble tries to minimise *Gibbs' free energy*, the grandcanonical ensemble tries to minimise *Grand potential* (or Landau) free energy


<div class=eqn> \[ 
    Φ_G = E−TS−µN
\] </div>

Then

<div class=eqn> \[ 
    dΦ_G = dE − TdS - SdT − µdN - Nd\mu \leq −dW−SdT−Ndµ
\] </div>

We can get a definition of entropy:

<div class=eqn> \[ \begin{align}
    S &= -k_B \sum_\nu p_\nu \ln{p_\nu}  \\[6pt]
      &= -k_B \sum_\nu p_\nu [-\beta(E_\nu - \mu N_\nu) - \ln{Z}]  \\[6pt]
      &= \frac{ \langle E \rangle - \mu \langle N \rangle }{ T } + k_B \ln{Z}
\end{align} \] </div>

That gives us

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \begin{align}
                Φ_G &= \langle E \rangle − TS − \mu \langle N \rangle \\[6pt]
                    &= -k_B T \ln{Z}
            \end{align} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Density of States

If a system is large enough, then the energies are no longer discrete, but become *continuous*. So instead of using that <span class="definition" data-definition="\[ Z(T, V, \mu) = \sum_\nu e^{-\beta(E_\nu - \mu N_\nu)} \]">pesky sum</span> we had before for the partition function, we now use an *integral*:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ Z = \int g(E) e^{-\beta E_\nu} \ dE \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

\\( g(E) \\) is the *density of states*, which tells us how many states there are per unit energy. To get it, we just need to figure out the total number of states with energy less than \\( E \\), and then divide it by \\( E \\). Since we are in the business of using calculus:

<div class=eqn> \[ 
    g(E) = \frac{dN(E)}{dE}
\] </div>

The number of states with energy less than that of wavenumber \\( k_E \\) is

<div class=eqn> \[ 
    N(E) = k_E \frac{L}π = \frac{L}π \left( \frac{2mE}{\hbar^2} \right)^\frac12
\] </div>

And now all we've gotta do is differentiate that with respect to E. If you do that (bearing in mind that a bunch of these letters are just constants, meaning you can essentially just ignore 'em), you end up with

<div class=eqn> \[ 
    g(E) \frac{N(E)}{dE} = \frac{L}π \frac12 \left( \frac{2m}{\hbar^2} \right)^\frac12 \frac1{E^\frac12}
\] </div>

In 3D:

<div class=eqn> \[ 
    N(E) = \frac{\frac14 π |k_E|^2}{π^2 / A} 
\] </div>

- **1-DIMENSIONAL** \\[ g(E) = \frac{L}{2π} \left( \frac{2m}{\hbar^2} \right)^\frac12 \frac1{E^\frac12} \\]
- **2-DIMENSIONAL** \\[ g(E) = \frac{A}{4π} \frac{m}{\hbar^2} \\]
- **3-DIMENSIONAL** \\[ g(E) = \frac{V}{4π^2} \left( \frac{2m}{\hbar^2} \right)^\frac32 E^\frac12 \\]

### Quantum Statistics

Quantum theory dictates that particles fall into two categories, which behave entirely differently when occupying quantum levels

#### Fermion

Fermions are particles like electrons, protons, neutrons and similar stuff, and these have a half integer spin. More importantly, only one can be in a quantum state at a time

Since there can only be one fermion in a particular state, that means that they only have two microstates, \\( \mu = 1 \\) (occupied) and \\( \mu = 0 \\) (unoccupied). This means the partition function is:

<div class=eqn> \[ \begin{align}
   Z(T, \mu) &= \sum_{\nu = 0}^1 e^{-\beta(E_\nu - \mu N_\nu)} \\[6pt]
             &= 1 + e^{-\beta(E - \mu)}
\end{align} \] </div>

Calculate the average number of particles:

<div class=eqn> \[ \begin{align}
   \langle N \rangle &= \sum_{\nu = 0}^1 N_\nu p_\nu \\[6pt]
             &= \frac{e^{-\beta(E - \mu)}}{1 + e^{-\beta(E - \mu)}}
\end{align} \] </div>

Then cancelation leaves us with the Fermi-Dirac Distribution, describing the average number of particles in a given energy level:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ n_\text{FD}(E, \mu) = \frac{1}{e^{\beta(E - \mu)} \style{color: cyan}{+} 1} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Fermi-Dirac Distribution
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

*You might be wondering why I highlighted the plus sign. Trust me, I know what I'm doing, you'll see, just wait a sec, k?*

#### Boson

Unlike our antisocial friends the fermions, any amount of bosons can occupy a single quantum level, meaning the partition function forms a geometric series:

<div class=eqn> \[ \begin{align} Z(T,\mu)
    &= \sum_{\nu} e^{-\beta(E_\nu-\mu N_\nu)} \\[6pt]
    &= 1 + e^{-\beta(E-\mu)} + e^{-\beta(2E-2\mu)} + \cdots + e^{-N\beta(E-\mu)} + \cdots \\[6pt]
    &= \frac{1}{1-e^{-\beta(E-\mu)}}.
\end{align} \] </div>

Then

<div class=eqn> \[ \begin{align} n(T,\mu) 
    &= \frac{1}{\beta}\frac{\partial \ln Z}{\partial \mu} \\[6pt]
    &= \frac{1}{\beta}\frac{\partial}{\partial \mu}\left[-\ln\left(1-e^{-\beta(E-\mu)}\right)\right] \\[6pt]
    &= \frac{1}{\beta}\frac{e^{-\beta(E-\mu)}}{1-e^{-\beta(E-\mu)}}\,\beta.
\end{align} \] </div>

Then cancelation leaves us with the Bose-Einstein Distribution, describing the average number of bosons in a given energy level:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ n_\text{BE}(E, \mu) = \frac{1}{e^{\beta(E - \mu)} \style{color: cyan}{-} 1} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>



Since the number of particles per state can't be negative. For this to be the case, the denominator must be more than zero

<div class=eqn> \[ \begin{align}
    e^{\beta(E - \mu)} - 1 &> 0 \\[6pt]
    \therefore e^{\beta(E - \mu)} &> 1
\end{align} \] </div>

This means the exponent must be a positive number:

<div class=eqn> \[ \begin{align}
    E - \mu &> 0 \\[6pt]
    E &> \mu
\end{align} \] </div>

And since the lowest energy level is \\( E=0 \\):

<div class=eqn> \[ \begin{align}
    0 &> \mu, \text{ i.e. } \mu \text{ is negative}
\end{align} \] </div>

> The chemical potential (\\(\mu\\)) for a gas of bosons must be a *negative number* (\\(\mu < 0\\)), to stop the formula from giving a physically impossible "negative number of particles" in the ground state.

### Many-Particle Systems

Now of course, a real system will have a lot of particles with a lot of different quantum levels. If the temperature were to go all the way to zero, then that would mean the particles don't have enough energy to go into higher energy states.

#### Fermions

One thing these particles all have in common is that they are all *fermions*, meaning they follow the pauli exclusion principle.

We can model a multi-particle system like this:

- Every quantum level (meaning every given energy and spin) is thought of as its own system which can either have a fermion or not.
- If there is no external energy input (i.e. \\( T = 0 \\)), then all the fermions go into the lowest possible energy state, up until the *Fermi Energy*, \\( E_F \\). If the energy of a state is lower than the Fermi energy, then the state is filled.

In a closed system, no amount of particles can leave or enter. However in the grand canonical ensemble, we've kinda already assumed that particles entering or exiting *is* possible.

So in a closed system, \\( \mu \\) is chosen in such a way that the total number of particles is the required value.

<div class=eqn> \[ 
   N = \sum_E g_E n_{FD}(E, \mu)
\] </div>

Since it is continuous, use an integral instead:

<div class=eqn> \[ 
   N = \int g_E n_{FD}(E, \mu) \ dE
\] </div>

Now we can calculate the degeneracy:

<div class=eqn> \[ \begin{align}
N   &= \sum_E g_E\, n_{\mathrm{FD}}(E,E_F) \\[6pt]
    &= V \int_0^\infty \, \frac{2}{4\pi^2}\left(\frac{2m}{\hbar^2}\right)^{\frac32} E^{\frac12}\, n_{\mathrm{FD}}(E,E_F) \ dE
\end{align} \] </div>

Take the constant \\( \alpha \\)

<div class=eqn> \[ \begin{align}
N   &= \alpha V \int^{E_F}_0 E^{\frac12} \ dE \\[6pt]
    &= \frac23 \alpha V E^{\frac32}_{E_F}
\end{align} \] </div>

Giving a Fermi Energy of:

<div class=eqn> \[
    E_F = \frac{\hbar^2}{2m} (3π^2 \rho)^\frac23.
\] </div>

Then to get total energy:

<div class=eqn> \[ \begin{align}
    E_{\mathrm{tot}}
    &= \sum_E g_E\, E\, n_{\mathrm{FD}}(E, E_F) \\[6pt]
    &= \alpha V \int_0^{E_F} E^{\frac32} \ dE \\[6pt]
    &= \frac25 \alpha V E_F^{\frac53}.
\end{align} \] </div>

#### Free Bose Gas

Now if we do the same thing, but this time for bosons. Instead of using the <span class="definition" data-definition="\[ n_\text{FD} = \frac{1}{e^{\beta(E-\mu)}+1} \]"> Fermi-Dirac Distribution</span>, we'll use the <span class="definition" data-definition="\[ n_\text{BE} = \frac{1}{e^{\beta(E-\mu)}-1} \]"> Bose-Einstein Distribution</span>:

<div class=eqn> \[ \begin{align}
    N
    &= \sum_E g_E\, n_{\mathrm{BE}}(E,\mu) \\[6pt]
    &= V \int_0^\infty \frac1{4\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2} E^{1/2}\frac{1}{e^{\beta(E-\mu)}-1} \ dE \\[6pt]
    &= \frac{\pi}{4}\left(\frac{2mL^2 k_B T}{\hbar^2 \pi^2}\right)^{3/2} \int_0^\infty \frac{x^{1/2}}{e^{(x-\beta\mu)}-1} \ dx
\end{align} \] </div>

Hey, looks like a pretty standard formula to me, what's the problem?

Well, bellend, the problem is that, as the temperature tends to zero, \\( \beta \\) will tend to infinity. And whilst beta is doing that, the denominator is becoming infinite too. Now this is a problem because that means that as the temperature becomes zero, the average number of particles becomes zero, which is obviously a bit tapped.

To fix this, let's try to calculate the maximum amount of particles the system *could* have, which we can do by setting the chamical potential to be zero. Take the ground state energy to be \\( E_0 = 0 \\). Then, if \\( \mu > 0 \\)

<div class=eqn> \[ \begin{align}
    N_{\max}
    &= \frac{\pi}{4}\left(\frac{2mL^2 k_B T}{\hbar^2 \pi^2}\right)^{3/2}
    \int_0^\infty dx\, \frac{x^{1/2}}{e^x - 1} \\
    &= 2.61\, \frac{\pi}{4}\left(\frac{2mL^2 k_B T}{\hbar^2 \pi^2}\right)^{3/2}.
\end{align} \] </div>

This would mean at low temperatures, states can only hold a finite number of states, tending to zero. So then the question becomes, what exactly happens to the remaining particles?


### TL;DR

-
