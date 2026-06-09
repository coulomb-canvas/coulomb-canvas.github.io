---
subid: canonical-en
title: The Canonical Ensemble
topics: stat
---

Before our system was completely isolated, no external interaction. Let’s now put our system into a heat bath. A heat bath is a very large system, which can change the temperature of our own system, but without having much change in its own temperature. Together, this forms a new, larger isolated system.

<div class=eqn> \[ E = E_\nu + E_B \] </div>

Now that the system’s energy can change, each microstate is no longer equally likely. The possibility of finding that microstate ν with energy \\( E_ν \\) depends on what the energy \\( E_ν \\) is. The probability of being in a particular state is proportional to the number of states in the bath, \\( \Omega_B (E−E_ν,V,N) \\)

<div class=eqn> \[ p_ν ∝ \Omega_B (E−E_ν,V,N) = e^{\frac{S_B(E−E_ν,V,N)}{k_B}}\] </div>

Using a Taylor expansion:

<div class=eqn> \[ S_B(E−E_ν,V,N) = S_B(E,V,N) - E_\nu \frac{\partial S_B}{\partial E} \] </div>

Now we feature a new character: Temperature (T), formally defined as 1/T = ∂S/∂E, or how much entropy increases with a change in energy, or how willing it is to give up energy.

<div class=eqn> \[ \frac1{T} = \frac{\partial S_B}{\partial E} \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[p_ν ∝ e^{−\frac{E_ν}{k_B T}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

For simplicity,

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[p_ν ∝ e^{−\beta E_ν} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Using the probability formula, we can see that the probability of a microstate decreases as energy increases (lower energy is more likely), and that higher energies are much more likely with higher temperatures.

> The *canonical ensemble* looks at a system in a heat bath, considering the system's temperature, volume and number of particles (remember the microcanonical ensemble considered the system's energy, rather than temperature). The canonical ensemble is larger than the microcanonical ensemble as the energy is not fixed and *includes states with all energies*.

### The Partition Function

Great, we are one step of the way! Now we know what the probability of a microstate is *proportional to*, but how do we figure out what the probability actually is?

To move from proportionality to an actual value, we need to ensure that the total probabilities add up to one. By adding up all the \\( e^{−\beta E_ν} \\)s, we get a constant which we can divide the result by, Z, the Partition function. 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ Z = \sum_\nu e^{−\beta E_ν} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Partition function
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

That gives the exact probability of a microstate

<div class=eqn> \[ p_ν = \frac1{Z} e^{−\beta E_ν} \] </div>

And I won't even lie to you... this \\( Z \\) guy might be the most hype thing in this entire module. Because if you know the Partition function, you can find out literally anything! Like say you wanna know the average energy, \\( \langle E \rangle \\). There's an equation for that:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \langle E \rangle = -\frac{\partial \ln{Z}}{\partial \beta} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Partition function
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

We’ll try this with a simple example: the system only has two possible energies, \\( E = 0 \\) and \\( E = ε \\). If \\( E=0 \\), then \\( p_ν = 1 \\). If \\( E = \varepsilon \\), then \\( p_ν =e^{−\beta \varepsilon} \\). Adding them together gives 

<div class=eqn> \[ Z = 1 + e^{−\beta \varepsilon} \] </div>

The average energy is then:

<div class=eqn> \[ \begin{align} \langle E \rangle
    &= p_0 E_0 + p_1 E_1 \\[6pt]
    &= \frac1{Z} \varepsilon e^{−\beta \varepsilon} 
    \end{align} \] </div>

This will give us the average energy for any temperature. At very low temperature, we would expect there to be not enough energy, which works with the equation, bc as T => 0, <E> = 0. At higher temperatures, we would expect enough energy, which makes sense because as T = infinity, <E> = ε / 2

#### Harmonic Oscillator


<div class=eqn> \[ \begin{align} \langle E \rangle 
    &= \sum_n e^{−\beta E_n} \\[6pt]
    &= e^{− \frac{\hbar\omega}2 \beta} + e^{− 3\frac{\hbar\omega}2 \beta} + e^{− 5\frac{\hbar\omega}2 \beta} + \dots
    \end{align} \] </div>

This is a geometric series, meaning the sum is \\( \frac{r}{1-r} \\)

<div class=eqn> \[ Z = \frac{e^{−\beta \hbar\omega / 2}}{1-e^{−\beta \hbar\omega}} \] </div>

Taking logs:

<div class=eqn> \[ \ln{Z} = -\frac{\beta \hbar\omega}2 - \ln(1 - e^{−\beta \hbar\omega}) \] </div>

And then differentiate

<div class=eqn> \[ \langle E \rangle = \frac{\hbar\omega}2 + \frac1{e^{\beta \hbar\omega} - 1}\hbar\omega \] </div>

Even at temperature \\( T = 0 \\), there is \\( \frac{\hbar\omega}2 \\) energy. This is the *zero-point energy*

### Entropy

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ S = -k_B \sum_\nu p_\nu \ln{p_\nu} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Entropy
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Combining Systems

Now say we have two systems, one with \\( \nu \\) and one with \\( \mu \\). The combined partition function is now:

<div class=eqn> \[ Z = \sum_\nu e^{-\beta E_\nu} \sum_\mu e^{-\beta E_\mu} = Z_1 Z_2 \] </div>

<div class=eqn> \[ S = -k_B\sum_{\nu, \mu} p_\nu p_\mu \ln{p_\nu, p_\mu} = S_1 + S_2 \] </div>

### TL;DR

-
