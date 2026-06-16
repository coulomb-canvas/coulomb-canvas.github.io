---
subid: qm-postulates
title: Postulates of Quantum Mechanics
topic: qaia1
---

These are basically the rules of the gme



<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ T(t) = e^{-iEt/\hbar} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 5: Time-dependent Phase Factor
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

We have already touched on postulate one

- The wavefunction must be continuous
- The derivative must be continuous, because if not the second derivative will be infinite
- It must be normalisable (always normalise first)

> **POSTULATE 1** Any system has a wavefunction, \\( Psi(x, t) \\) which is continuous, square-integrable, and single-valued, from which we can make predictions about the state of the system

Infinite potential will

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \hat{H} = -\frac{\hbar^2}{2M} \nabla^2 + V(r) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: The Hamiltonian
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Operators

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \int f^* \hat{Q} g \ d\tau = \int g \hat{Q}^* f^* \ d\tau \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Hermitian Operators
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \langle\hat{Q}\rangle = \int \psi^* \hat{Q} \psi d\tau \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

> **POSTULATE 2** Any variable is represented by a *Hermitian operator*, whose eigenvalues represent the possible results of the system

The reason we need a Hermitian operator is because it needs to be real. <span class="popup-trigger" data-popup-id="v-u"> it can be proven</span>

<div class="popup" id="v-u">
        <div class="popup-content">
          <button class="popup-close">&times;</button>
          <h4 style="font-family: 'Njal', sans-serif; font-size: 30px; text-decoration: underline; 
          margin-bottom: 0px; margin-top: 0px;">Hermitian Operator ✪</h4>
          <p>
            Start with the eigenvalues:</p>
            \[
                \hat{Q}\phi_n = q_n \phi_n \text{ and } \hat{Q}^* \phi_n^* = q_n^* \phi_n^*
            \]
            <p>Multiply the first equation by the complex conjugate, and the second equation by the normal one. </p>
            \[
                \phi_n^*\hat{Q}\phi_n = q_n \phi_n^* \phi_n \text{ and } \phi_n \hat{Q}^* \phi_n^* = q_n^* \phi_n \phi_n^*
            \]
            <p>Then integrate over all space:</p>
            \[
                \int \phi_n^*\hat{Q}\phi_n \ d\tau = \int q_n \phi_n^* \phi_n \ d\tau \\ 
                \int \phi_n \hat{Q}^* \phi_n^* \ d\tau = \int q_n^* \phi_n \phi_n^* \ d\tau
            \]
            <p>Then by using the definition of a Hermitian operator (<span class="definition" data-definition="\[ \int f^* (\hat{Q} g) \ d\tau = \int g (\hat{Q}^* f^*) \ d\tau \]">Equation ???</span>), we can see that the two integrals are the same, leaving us with:</p>
            \[
                \int q_n \phi_n^* \phi_n \ d\tau = \int q_n^* \phi_n \phi_n^* \ d\tau \\
                \therefore q_n = q_n^*
            \]
            <p>The only numbers which are the same as their complex conjugates are <em>real numbers</em>.</p>
          </p>
        </div>
      </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \hat{P} = -i\hbar\nabla \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: The momentum operator
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \phi = Ae^{i\vec{k}\cdot\vec{r}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: The momentum operator
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \int^{+\infty}_{-\infty} \phi^* \phi \ d𝜏 = \delta_{nm} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: The commutator
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>



> **POSTULATE 3** The position operator is \\( \hat{X} = x \\), and the momentum operator is \\( \hat{P} = -i\hbar\nabla \\). Any other operator can be created by combining those 2

### Probability distributions

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ 𝜓 = \sum_n a_n \phi_n \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: The commutator
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>


> **POSTULATE 4** If you have a wavefunction which is a combination of a bunch of smaller wavefunctions (\\( \Psi = \sum_n a_n + \phi_n \\)), and the apply some operator on it (which we will call \\( \hat{Q} \\)), then the likelihood of geting a particular eigenvalue \\( q_m \\) is \\( |a_n|^2 \\)

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ a_n = \int 𝜙^*_𝑛 𝜓 \ d𝜏.  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: The commutator
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Expectation value

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ ⟨\hat{Q}⟩ = \int 𝜓^* Q 𝜓 \ d𝜏   \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expectation value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

This is an average value of a bunch of measurements

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \sqrt{ \delta Q } = \sqrt{ ⟨\hat{Q}^2⟩ - ⟨\hat{Q}⟩^2 }   \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expectation value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Commutation relations

This is the definition of the commutator

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ [\hat{Q}, \hat{R}] = \hat{Q}\hat{R} - \hat{R}\hat{Q} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: The commutator
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

This tells us if 2 variables are compatible (can we know two variables are the same time)

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ [\hat{P}_x, \hat{X}] = -i\hbar \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Most famously position and momentum

### The Generalised uncertainty principle

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ ∆q∆r = \frac12 |⟨[\hat{Q}, \hat{R}]⟩| \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

> **POSTULATE 5** Between measurements, time-dependance is governed by the TDSE \\[ i\hbar \frac{\partial}{\partial t} \Psi(\mathbf{r}, t) = \hat{H} \Psi(\mathbf{r}, t) + V(r, t) \\]