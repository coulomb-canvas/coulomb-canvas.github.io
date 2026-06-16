---
subid: qm-additional
title: Additional Interactions in atoms
topic: qaia1
---

Classically, to make a magnetic field, we take a coil of wire and put a current through it. That generates an magnetic dipole moment, \mu. In a way, an electron orbiting a nucleus is basically the same thing, meanign it also creates a magnetic moment. 

In quantum mechanics, we just promote the vectors to operators: 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \hat{\vec{\mu}} = -\frac{e}{2M}\hat{\vec{L}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Classically, if there was a B-field, there should be a torque to align the dipole, and there will be some resistance due to the angular momentum (like a spining top). This would cost energy: 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \Delta E = \mu_B B m \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

The Bohr Magneton is the fundamental unit of magnetism 

### The Stern Gerlach Experiment 

They wanted to see this quantisation. 

Shot atoms through a non-uniform electric field. 

There are millions of atoms, pointing in random directions, meaning they are at random oblique angles, experiencing varying forces. 

However, with m, since it is quantised, there should be a discrete splitting, causing 2l+1. They specifically chose silver, since their angular momentum is cancelled out, meaning only it’s valence electron contributes to its magnetism 

In the s orbital, l = 0, meaning we expect 1 beam. But they saw two spots, which would require l = ½, but l needs to be an integer, so wagwan? 

Electrons have internal angular momentum, called spin, independent of any actual movement 


### Pauli spin matrices 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \hat{S}_i = \frac{1}{2}\hbar\sigma_i \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

They do not commute: you can’t know an electron’s spin in the x and y directions at the same time 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \delta E = g\mu_B m_j B \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \hat{H}_\mathrm{LS} = f(\vec{r}) (\hat{J}^2 - \hat{L}^2 - \hat{S}^2) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \hat{H}_\mathrm{B} = -\frac{eB_0}{2M} (\hat{L}_z + 2\hat{S}_z) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ ∆\hat{H} = \hat{H}_\mathrm{LS} + \hat{H}_\mathrm{B} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

#### The strong-field Zeeman effect

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ ∆E = \frac{e \hbar B_0}{2M} (m_l + 2m_s) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

#### Pure spin-orbit coupling

#### The weak-field Zeeman effect

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \delta E = gµ_B m_j B \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Photon emission from atoms

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ g = 1 + \frac{j(j+1)-l(l+1)+s(s+1)}{2j(j+1)} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>