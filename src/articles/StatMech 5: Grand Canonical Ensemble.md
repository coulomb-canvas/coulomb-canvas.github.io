---
subid: grand-canon-en
title: The Grand Canonical Ensemble
topics: stat
---

So far we hve had

- **MICROCANONICAL ENSEMBLE** The possible states in a completely isolated thermodynamic system. It is characterised by a fixed number of particles (\\(N\\)), a fixed volume (\\(V\\)), and a constant total energy (\\(E\\)). Because it cannot exchange energy or matter with its surroundings, its total energy is strictly conserved.
- **CANONICAL ENSEMBLE** The possible states of a system in thermal equilibrium with a heat bath at a constant temperature \\(T\\). It assumes the system's particle number (\\(N\\)) and volume (\\(V\\)) remain fixed, while energy fluctuates.

The *grand canonical ensemble* now allows for the exchange of particles with a reservoir, not just volume. 

The derivations are pretty much the exact same as the ones used for the microcanonical and canonical ensembles.

<div class="eqn"> \[
    E = E_R + E_\nu, \quad N = N_R + N_\nu
\] </div>

The probability that the system is in microstate \\( \nu \\) is proportional to the number of states the reservoir could be in with this energy and particle number, \\( \Omega_R(E_R, N_R, V) \\):

<div class=eqn> \[ p_ν ∝ \Omega_R (E−E_ν, N−N_ν, V) = e^{\frac{S_R(E−E_ν, N−N_ν, V)}{k_B}}\] </div>

Use a Taylor expansion:

<div class=eqn> \[ 
    S_R(E - E_\nu, N - N_\nu, V) \approx S_R(E, N, V)
    - E_\nu \frac{\partial S_R}{\partial E}
    - N_\nu \frac{\partial S_R}{\partial N}
\] </div>

Therefore

<div class=eqn> \[ 
    p_\nu \propto \exp{\left(
    -\frac{E_\nu}{k_B}\frac{\partial S_R}{\partial E}
    -\frac{N_\nu}{k_B}\frac{\partial S_R}{\partial N}
    \right)}
\] </div>

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

\\( \mu \\) is the *chemical potential*...
This means

<div class=eqn> \[ 
    p_\nu \propto e^{-\beta(E_\nu - \mu N_\nu)}
\] </div>

<div class=eqn> \[ 
    Z(T,V,µ) = \sum_\nu e^{-\beta(E_\nu - \mu N_\nu)}
\] </div>

> **CANONICAL ENSEMBLE** The set of microstates of the system, which now allows energy and particle number to fluctuate

### The Grand Potential

Now that particles can be added and removed from the system, there is another source of energy:

<div class=eqn> \[ 
    TdS ≥ dE + dW − µdN
\] </div>

Grand potential

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

<div class=eqn> \[ \begin{align}
    Φ_G &= \langle E \rangle − TS − \mu \langle N \rangle \\[6pt]
        &= -k_B T \ln{Z}
\end{align} \] </div>

### The Thermodynamic Limit

### Density of States

If a system is large enough, then the energies are no longer discrete, but become *continuous*. Now the partition function becomes:

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

\\( g(E) \\) is the *density of states*

The number of states with energy less than that of wavenumber \\( k_E \\) is

<div class=eqn> \[ 
    N(E) = k_E \frac{L}π = \frac{L}π \left( \frac{2mE}{\hbar^2} \right)^\frac12
\] </div>

<div class=eqn> \[ 
    g(E) \ dE = \frac{N(E)}{dE} dE = \frac{L}π \frac12 \left( \frac{2m}{\hbar^2} \right)^\frac12 \frac1{E^\frac12}dE
\] </div>

<div class=eqn> \[ 
    g(E) = \frac{L}π \frac12 \left( \frac{2m}{\hbar^2} \right)^\frac12 \frac1{E^\frac12}
\] </div>

In 3D:

<div class=eqn> \[ 
    N(E) = \frac{\frac14 π |k_E|^2}{π^2 / A} 
\] </div>

- **1-DIMENSIONAL** \\[ g(E) = \frac{L}{2π} \left( \frac{2m}{\hbar^2} \right)^\frac12 \frac1{E^\frac12} \\]
- **2-DIMENSIONAL** \\[ g(E) = \frac{A}{4π} \frac{m}{\hbar^2} \\]
- **3-DIMENSIONAL** \\[ g(E) = \frac{V}{4π^2} \left( \frac{2m}{\hbar^2} \right)^\frac32 E^\frac12 \\]

### Quantum Statistics

#### Fermion

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

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ n(E, \mu) = \frac{1}{e^{\beta(E - \mu)} + 1} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

#### Boson

Any amount of particles can occupy a boson

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

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ n(E, \mu) = \frac{1}{e^{\beta(E - \mu)} - 1} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Many-Particle Systems

Now of course, a real system will have a lot of particles with a lot of different quantum levels. Like a metal

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
