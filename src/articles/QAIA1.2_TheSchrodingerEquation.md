---
subid: schrodinger2
title: The Schrödinger Equation (revisited)
topic: qaia1
---

From last year, remember:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ i\hbar \frac{\partial \psi(\vec{r},t)}{\partial t} = -\frac{\hbar^2}{2M}\nabla^2\psi(\vec{r},t) + V(\vec{r},t)\psi(\vec{r},t) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: 3D Time-Dependent Schrödinger Equation
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

In short, this is basically about energy conservation. We know from classical mechanics that the total energy is just the kinetic energy plus potential energy. 

In quantum mechanics, we use operators rather than variables, which we will go into later. But for now, the operators become this.

As for the wave function, we don't really know what it does in real life, since it has imaginary numbers. However, we can take the square of the wave function to get the probability of a particle being in a particular place, called the probability density.

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ P(x,t)dx = |\psi(x,t)|^2 = \psi^*(x,t)\psi(x,t) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Born Postulate (Probability Density)
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

If we are gonna use this as a probability, it must follow the basic laws of statistics. Most notable, that the total probability of all its possibilities must be one. To normalise the wavefunction, such that it obeys this rule, we have to insist that the integral of the probability over all space must equal 1:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \int_{-\infty}^{+\infty} \psi^*\psi dx = 1 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: Normalisation Condition
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Time Independent Schrodinger Equation

This is quite difficult to solve altogether, since we have to consider time AND space. However, <span class="popup-trigger" data-popup-id="sep-of">by separation of variables</span>, we can remove the spacial component and only have the spacial component:

<div class="popup" id="sep-of">
    <div class="popup-content">
        <button class="popup-close">&times;</button>
        <h4 style="font-family: 'Njal', sans-serif; font-size: 30px; text-decoration: underline; 
        margin-bottom: 0px; margin-top: 0px;">TISE ✪</h4>
        <p>
        Separate</p>
        \[
            \psi = \phi(x)T(t)
        \]
        <p>Rearrange </p>
        \[
            i\hbar \frac1{T(x)} \frac{\partial T(t)}{\partial t} = -\frac{1}{\phi(x)}\frac{\hbar^2}{2M}\nabla^2 \phi(x) + V(x)
        \]
        <p>Both sides are constant</p>
        \[
            T(t) = e^{-iEt/\hbar} \\
            \psi = \phi(x)e^{-iEt/\hbar}
        \]
        <p>Put that back in the Schrodinger Equation</p>
        \[
            i\hbar \cancel{e^{-iEt/\hbar}}\frac{\partial \phi(x)}{\partial t} = -\cancel{e^{-iEt/\hbar}}\frac{\hbar^2}{2M}\nabla^2\phi(x)+ V(\vec{r},t)\phi(x)\cancel{e^{-iEt/\hbar}}
        \]
        </p>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \hat{H}\phi = E\phi \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4: Time-independent Schrödinger Equation (TISE)
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

This isn't a problem, since usually the potential isn't changing.

In a *stationary state*, the probability density doesn't change at all

### Boundary conditions

The wave function needs to be continuous and single valued

Must be square integrable

1st derivative of the wave function must be continuous unless there is a potential step.
The second spacial derivative would be infinite, meaning there is infinite potential energy, which is impossible

<div class=eqn> \[
V(r)= \begin{cases}
    0, & |x| \le a, \\
    \infty, & |x| > a.
\end{cases} \] </div>

Where potential is zero

<div class=eqn> \[ E \phi(x) = \frac{\hbar^2}{2M}\nabla^2\phi(x) \] </div>

The solution is:

<div class=eqn> \[ \phi(x) = A\sin{kx} + B\cos{kx} \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ E_n = \frac{\hbar^2 π^2}{8Ma^2} n^2 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4: Time-independent Schrödinger Equation (TISE)
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Quantum tunnelling

The kinetic energy does not change


### Harmonic oscillators

This is the quantum mechanical equivalent of a spring, which models atoms vibrating

<div class=eqn> \[ V(x) = \frac12 kx^2 \] </div>

Where k is the effective spring constant. By using \\( k = m\omega^2 \\)

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ V(x) = \frac12 m\omega^2 x^2 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 6: Potential of a 1D harmonic oscillator
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ E \phi(x) = -\frac{\hbar^2}{2M}\frac{\partial^2 \phi(x)}{\partial x^2} + \frac12 m\omega^2 x^2 \phi(x) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 7: 1D TDSE for a Harmonic Oscillator
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ E = \left( \frac12 + n \right) \hbar \omega \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 8: Energy for a Harmonic Oscillator
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### TL;DR

- Classically, a particle in a well can have any energy, can be perfectly still (zero energy), and cannot escape its boundaries. Quantum mechanically, energy is restricted to discrete "steps" (quantised), it can never be perfectly still (zero-point energy), and it has a slight probability of being found outside the classical boundaries (quantum tunnelling).
- The *Time-dependant Schrodinger equation* is the core equation used to find stationary energy levels. \\[ i\hbar \frac{\partial}{\partial t} \Psi(\mathbf{r}, t) = \hat{H} \Psi(\mathbf{r}, t) + V(r, t) \\] For this system, the potential energy term is shaped like a parabola (proportional to \\( x^2 \\)), representing a restoring force.
- A harmonic oscillator perfectly models the vibrational stretching between two atoms in a molecule. We simplify the maths by treating the two moving atoms as a single effective mass (the "reduced mass") oscillating on a spring.
- A particle oscillating in 3D space is mathematically treated as *three independent 1D oscillators* (one for \\(x\\), \\(y\\), and \\(z\\)). The total energy is the sum of the energies from all three directions, which often leads to degeneracy (different spatial states having the exact same total energy).
- Normalising a wavefunction simply scales it so that the total probability of finding the particle anywhere in space equals exactly 1 (or 100%).