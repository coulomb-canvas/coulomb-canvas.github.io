---
subid: eto-intro
title: Introduction to ETO
topics: eto
---


### Revision

Before we start learning about *electromagnetism*, me must start by going over the basics of *Electricity and Magnetism* separately.

#### The Lorentz Force

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{F} = q( \vec{E} + \vec{v} \times \vec{B} ) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: The Lorentz Force
        </div><div class="formula-tooltip-desc">
            The Lorentz force states that if a stationary charge accelerates, an electric field must be present; if its path starts to curve as it starts to move, there is a magnetic field as well.
        </div></span>
    </div>
</div>

#### Coulomb's Law

The strength of an electric field at a particular distance from a charge is proportional to the charge and inversely proportional to the square of the distance.

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{E}(\vec{r}) = \frac{q}{4π \varepsilon_0 r^2} \hat{r} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Coulomb Force
        </div><div class="formula-tooltip-desc">
            The Lorentz force states that if a stationary charge accelerates, an electric field must be present; if its path starts to curve as it starts to move, there is a magnetic field as well.
        </div></span>
    </div>
</div>

### The Laws

But before we do get into this, let me introduce you to my newest friend, \\( J \\). This is one of \\( I \\)'s close friends, and \\( I \\) recently introduced him to me. His name is *current density*, and this is the *current per unit area*.

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ I = \int_S \vec{J} \cdot d\vec{S} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: Current density
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>


Why does this matter? Up until now, we've assumes wires are practically infinitely thin, or at least thin enough that only one electron can pass through a given point at any time. However, were in the big leagues now, which means we actually have to account for the fact that wires can be a bit chunky, meaning multiple electrons can pass through a given point.

The reason this is a problem is because, say we have a current of 100 amps. That would mean that 100 electrons are passing through the point per second. However, is that because the electrons themselves have a lot of energy and are therefore moving very quickly, or is the wire just really really really big, meaning 100 electrons can fit through the gap at once?

See what I mean? So anyway, we now have current density to help us along on our journey.

#### Gauss' Law

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \Phi = \oint_S \vec{E} \cdot d\vec{S} = \frac{Q_\text{encl}}{\varepsilon_0} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4: Gauss' Law
        </div><div class="formula-tooltip-desc">
            The electric field coming out of the surface S (i.e. the electric flux) is proportional to the amount of charge enclosed in that surface S.
        </div></span>
    </div>
</div>

#### Ampere's Law

This is Gauss' Law's magnetic cousin. Ampere's Law tells us that the total magnetic flux coming out of a line of wire is proportional to the current in that wire.

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \oint_C \vec{B} \cdot d\vec{l} = \mu_0 I \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 5: Ampere's Law
        </div><div class="formula-tooltip-desc">
            The magnetic field coming out of a wire C is proportional to the current flowing through that wire, \( I \), with \( \mu_0 \) as the constant of proportionality.
        </div></span>
    </div>
</div>

#### The Solenoidal condition

*When I learnt about this in lectures, it was introduced to us as 'the law with no name', and some bloody nerd sat in from of me goes "erM, aKcHoOaLlY, by calling it 'the law with no name', you have in given it a name, making the statement false" brother get your lame-ass reddit-atheist bollocks out of here and just listen to the lecture fgs.*

This tells us that, for a given surface, any field lines which enter the surface must also exit it, or that there are no magnetic monopoles

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \oint_S \vec{B} \cdot d\vec{S} = 0 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 6: The Solenoidal condition
        </div><div class="formula-tooltip-desc">
            The magnetic field coming out of a closed surface S is zero. This is because there are no magnetic monopoles.
        </div></span>
    </div>
</div>

#### Faraday–Lenz law of induction

When there is a changing magnetic flux through a wire, this causes a magnetic field to be generated

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \oint_C \vec{E} \cdot d\vec{l} = -\frac{d\Phi}{dt} = -\frac{d}{dt} \int_S \vec{B} \cdot d\vec{S}  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 6: The Law of Induction
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### TL;DR

Think of \\( \oint_C \dots \cdot d\vec{l} \\) as meaning "the field coming out of the wire", and \\( \int_S \dots \cdot d\vec{S} \\) as meaning "the field coming out of a surface". That makes reading these rules a lot easier.

With that, Faraday's law can be read as "*the electric field coming out of the wire is equal to the negative rate of change of flux*." The solenoidal condition can be read as "*the magnetic field coming out of an enclosed surface*". A protip for trying to study electromagnetism: try and think of what the goofy-ahh mathematics are trying to say to you, rather than focusing on the mathematical-ness of them. 'Cus often times, much of the stupidity we have to deal with is just them trying to use maths to explain things which are better explained just with English.

Anyway, what have we learnt today?

