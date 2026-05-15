---
subid: planet-motion
title: Planetary Motion
topics: solar
---

I'm sure you know that people originally thought the earth was at the centre of the universe (*geocentrism*). This may sound a bit primitive nowadays, but when you consider the way the sky looks, it's not a completely ridiculous assumption.

Having said that, it's easier to explain the motions of the planets by placing the sun at the centre instead

### Kepler's Laws

People originally though orbits were perfect circles, which made certain geometries very difficult

#### K1

> A planet orbits the Sun in an ellipse, with the sun at one focus of the ellipse.

We have an ellipse, with two foci, both of which are equal distances from the centre of the ellipse. The distance from the first focus to the planet is called \\( r \\), and the distance from the second focus to the planet is \\( r^\prime \\). The ellipse is defined by the points where the sum of these two values are constant:

<div class=eqn> \[ r + r^\prime = \text{constant} = 2a \] </div>

Where \\( a \\) is the distance from the centre to the furthest edge of the ellipse

The eccentricity, \\( e \\), tells us how squished the ellipse is. The closest approach to the sun, the *perihelion*, is \\(a - ae\\). The furthest distance, the *aphelion* is \\(a + ae\\)

The different squishinesses of the ellipse produces different orbits.

- If \\(e = 0\\), then you get a perfect *circular orbit*
- If \\(e < 1\\), then you have an *elliptical orbit*
- If \\(e = 1\\), then you have a *parabolic orbit*
- If \\(e > 1\\), then you have a *hyperbolic orbit*

All of these are allowed orbits

#### K2

> A line connecting a planet to the Sun sweeps out equal areas in equal time intervals. 

At the points in the ellipse where the planet is closer to the sun, it has more kinetic energy (moving faster). At the other side of the orbit, it has more potential energy. Energy switches between kinetic and potential. 

That's all there is to it really, moving on:

#### Kepler's Third Law

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ P^2 = ka^3 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

Use earth units, of years and AUs

(The value of an AU was calculated to 1% by parallax of transit of venus)

By the way, Newton's law of Gravity came from this.

He assumed a circular orbit:

<div class=eqn> \[ P = \frac{2πr}{v} \] </div>

This means

<div class=eqn> \[ \left( \frac{2πr}{v} \right)^2 = \frac{4π^2r^2}{v^2} = kr^3  \] </div>

By cancelling and rearranging:

<div class=eqn> \[ \frac{v^2}{r} = \frac{4π^2}{kr^2} \] </div>

Now remember that the left hand side give us centripetal acceleration. Then by using Newton's second Law:

<div class=eqn> \[ m\frac{v^2}{r} = \frac{4π^2 m}{kr^2} \] </div>

Then with N3

<div class=eqn> \[ \frac{4π^2 m}{kr^2} = \frac{4π^2 M}{k'r^2} \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ P^2 = \frac{4π^2}{GM} a^3 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

In general

<div class=eqn> \[ m_1 a_1 = m_2 a_2 \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ P^2 = \frac{4π^2}{G(M_1 + M_2)} (a_1+a_2)^3 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

Kepler's third law makes weighing objects easier

### 3-Body Problem

When you have only two bodies (like the sun and the earth), then you can have a very simple solution like this. But for some bloody reason, the moment you introduce a third one, then things become super chaotic, and there is no one formula we can use.

So why doesn't the moon just get yeeted into the sun?

Well, we can kinda cheat, using the restricted 3-body problem, which has 2 massive bodies with their own gravities, and a teeny tiny object, which has negligible mass. If we assume that the moon is so small compared to the other two that it don't really contribute much, then we can kinda calculate it.

The *effective potential* (or *Roche potential*) is the sum of the gravitational and centrifugal forces. There are 5 *lagrange point* (\\(L_1\\) to \\(L_5\\)) where this potential is flat, meaning there is no net movement.

L1 and 2 are often use for telescopes, L4 and 5 are stable so are populated by asteroids. You get tadpole or horseshoe orbits libating around the L4 and 5 e.g the trojans of Jupiter

#### The Hill Sphere

There is also the *Hill sphere*, which is the bubble around earth at which the moon isn't ripped from its orbit (it must be well within it to have a stable orbit though). Weirdly it's not about the actual gravitational pull but gravitational gradient.

#### Hill Sphere Derivation

Sum gravity and potential

<div class=eqn> \[ \frac{Gm_2}{R_H^2} - \frac{Gm_1}{(a-R_H)^2} + \Omega(a - R_H) = 0 \] </div>

Use K3, to get angular frequency

<div class=eqn> \[ \Omega^2 = \frac{Gm_1}{a^3} \] </div>

Change the denominator

<div class=eqn> \[ (a - R_H)^{-2} = a^{-2} \left( 1 - \frac{R_H}{a} \right)^{-2} \approx a^{-2} \left( 1 + 2\frac{R_H}{a} \right) \] </div>

Then assume \\( m_1 \gg m_2 \\)

<div class=eqn> \[ \frac{Gm_2}{R_H^2} - \frac{Gm_1}{a^2} \left( 1 + 2\frac{R_H}{a} \right) +  \frac{Gm_1}{a^2} \left( 1 - \frac{R_H}{a} \right) \approx 0 \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ R_H \approx \left( \frac{m_2}{3m_1} \right)^\frac13 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

#### Resonances

Alternatively, one can consider a 3-body problem where 2 of the 3 masses are negligible, where they can instead be considered pertubations. Such as the discovery of Neptune.

This can give rise to *secular resonances*,which are long-term resonances which cause oscillations in eccentricity and the inclination (i) of planets, eg Milankovsch cycles. 

This also means that, when periods have integer ratios, perturbations grow in *mean motion resonances*, meaning they are periodically affected by each other's gravities, which can build up unless they are damped by tides. (often driving systems unstable), like the moons of Jupiter.

### Tidal Interaction

Tides happen because the gravitational pull of an object is stronger on the side closer to the object than further away (*differential gravity*). 

<div class=eqn> \[ dF = -\frac{2GMm}{r^3} \ dr \] </div>

This means tidal forces scale like \\( \frac1{r^3} \\). The planet is stretched out at the equator (*tidal bulges*), albeit very small, about 10cm for earth. The bulges are offset by the rotation of the earth and internal friction, which makes a MOMENT which exchanges angular momentum between the spin of the planet and the orbit of the moon. 

If the planet spins really quickly, and the satellite is very close, then the satelite tends to cause the planet to slow down (*spin down*), whilst the satelite itself moves further out. If the planet spins slowly, then the planets spin can be sped up, and orbits can be messed up.

Tidal torques are proportional to \\( \frac1{r^6} \\)

#### Tidal Locking

Overtime, this spinning up or down can eventually cause the planet and the satellite to rotate and orbit at the same rate. This is tidal locking, where the same face points towards the companion.

Where dF is greater than the self gravity of an object (meaning the force from the tidal bulges is stronger than the force of gravity keeping the satellite together), it will be *tidally disructed*. In short, it'll be ripped to shreds. This takes place at the Roche limit (the minimum distance a satellite needs to be away from the planet for it to be stable). This is why saturn has rings btw, all the stuff is too close to the planet, and is therefore within the Roche limit, meaning it gets ripped up.



If we have an eccentric orbits, then even with the whole tidal locking shabang, the tidal bulge cannot track the changing orbital speed perfectly. This causes orbital energy to be converted into heat in the tides (*tidal heating*), and the circularisation of the orbit at constant angular momentum (the eccentricity becomes lower, remember e=0 means a circular orbit). This can stablise mean motion resonances, by damping eccentricity which would otherwise keep growing

(Might get compare and contrast questions)

For “compare and contrast” questions, you could be asked to compare:

- Hill sphere vs Roche limit.
- Tidal locking vs tidal disruption.
- Secular vs mean‑motion resonances.