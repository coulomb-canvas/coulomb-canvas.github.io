---
subid: stars-intro
title: Introduction to Stars
topics: stars
---

Back from last year

### Stars? I've never heard of those before, what are they?!

What?! You're in your second year of university physics and you don't know what a bloody star is? Where have you even been all this while?

Well, wait until midnight tonight. Look up in the sky. You see the bright glowy things? No, not the big grey one, that's the moon. The small glittery ones. *Those* are stars.

Well, perhaps you can't be arsed to wait. Well, look outside now. You see that big bright glowy thing? Not anymore, 'cus now your blind!

In case you didn't notice, stars are pretty damn bright. Having said that, 'brightness' isn't an actual measurement. So how *do* we measure it?

The first way is *luminosity*. That tells you how much energy the star is actually puking out each second. Since it's energy per second, it has units \\( Js^{-1} \\), or \\( W \\).

The arguably more useful way is *flux*

\\[
    f = \frac{L}{4\pi d^2}
\\]

The distance \\( d \\) is a pretty valuable piece of information. Not only do we know how far away the star is, but we can figure out how *intrinsically* bright the star is.

### The sun

Stars are fundamentally just really really big balls of gas. These balls of gas are so massive that they are held together by their own self-gravity. This strong gravitational pull allows hydrogen atoms to fuse together (*nuclear fusion*), which radiates large amounts of energy. That is why they are so bright!

If we wanna understand all those far away glittery stars, then a good place to start is to understand our own friendly neighbourhood star, the sun.

- It has an effective temperature of \\( T_{\text{eff}} = 5780 K \\)
- It has a radius of \\( R_\odot = 7 \times 10^8 \text{ m} \\)
- It has a mass of \\( M_\odot = 2 \times 10^30 \text{ kg} \\)
- It's 4.6 billion years old (unc...)
- It rotates every 27 days or so

Now of course, stars are pretty diverse. Some are hotter, some are brighter, some are different colours

### Parallax

\\[
    \sin{\alpha} = \frac{r}d
\\]

If \\( \alpha \\) is teeny tiny, then by our bitesized buddy, the *small angle approximation*, that becomes:

\\[
    \alpha = \frac{r}d
\\]

This angle *could* be measured in degrees as usual, but remember we are assuming that our angle is pretty small, meaning that degrees might actually be too big. So instead, we use seconds and arcseconds.

### Astronomical observations

Most of our observations about space comes from looking at electromagnetic waves. And why the hell wouldn't it be? EM waves are adorable.

Different wavelengths will give us different information about the thing we are looking at. Unfortunately, not all wavelengths actually make their way over hear, due to that pesky *atmosphere* in the sky. Now you might be thinking "magical wavelength-blocky thing in the sky? I don't see a magical wavelength-blocky thing in the sky..." Well that's because the atmosphere is *invisible*.

The atmosphere is mostly made of water and carbon dioxide, both of which are infamously transparent. But that doesn't stop them from eating up certain wavelengths

That means most of our telescopes can only pick up visible light or radio waves. So if we really want other frequencies, we're gonna have to outer space and collect 'em ourselves

### Magnitudes and Colours

<div class=eqn> \[ m_1 - m_2 = -2.5 \log{ \frac{f_1}{f_2} } \] </div>

<div class=eqn> \[ m_* = -2.5 \log{ \frac{f_*}{f_\text{vega}} } \] </div>

Next, onto wavelengths. We talked about the flux as being the amount of energy a star radiates. This is the sum over all different wavelengths. So:

<div class=eqn> \[ f = \int^\infty_0 f_\lambda d\lambda  \] </div>

Slight problem, infinity is a pretty bloody large number. So large that it's impractical to measure the flux at every single wavelength. So instead we pick a smaller range of wavelengths to work with.

Now that we have these bands to work with, we can calculate the magnitudes of a single band

<div class=eqn> \[ \text{ Colour(B-V) } = m_U - m_B  \] </div>

So if B-V is less than 0, that means the magnitude of the blue frequencies is less than the magnitude of the rest of the visible frequencies, and since lower magnitude means brighter, that means a body where B-V is less than 0 appears to be bluer than Vega

Why is the colour helpful? Well as it turns out, the colour of a body is very closely linked to the temperature of said body.

#### Absolute magnitude

<div class=eqn> \[ M - m = -5 \log{ \frac{d}{10 \text{pc}} } \] </div>

### Background Radiation

Jumpscare formula!

<div class=eqn> \[ B_\lambda(T) = \frac{2 \pi hc^2 }{ \lambda^5 (e^{\frac{hc}{k_BT\lambda}}-1)}\] </div>

Really, bro? Again?! No way you're still scared of Planck's law?

<div class=eqn> \[ \lambda_\text{max}T = 2.898 \times 10^{-3} \text{ Km} \] </div>

Consider the units of intensity

<div class=eqn> \[ [B_\lambda] = J s^{-1} \ m^{-2} \ nm^{-1} \ st^{-1} \] </div>

So \\( \\) is the flux, \\( \text{nm}^{-1} \\) is per unit wavelength, and \\( \\) is per... steradian? What the bloody hell is a steradian I hear you ask?

Steradians are like the big brother of the radian. Radians measure angles in 2 dimensions, whereas steradians measure angles in 3 dimensions. We call 3-dimensional angles *solid angles*, and we typically represent it with the letter \\( \Omega \\)

<div class=eqn> \[ d\Omega = \sin{\theta} \ d\theta \ d\phi \] </div>

In a circle, there are 2π radians. How many steradians make up a sphere?

All we have to do is integrate the steradian over all space

<div class=eqn> \[ \begin{align} \text{Total solid angle of a sphere} &= 
    \int_\text{sphere} d\Omega 
    \\[6pt] &= \int^{2\pi}_0 d\phi  \int^{\pi}_0 \sin{\theta} \ d\theta 
    \\[6pt] &= 2\pi [- \cos{\theta}]^\pi_0
    \\[6pt] &= 4\pi
    \end{align} \] </div>

So a full sphere takes up 4π steradians.

If you have a beam of light or something, you can describe it in terms of how many *steradians* that beam takes up

<div class=eqn> \[ \begin{align} L &= 
    \underbrace{\int_0^\infty B_\lambda d\lambda}_{\frac{\sigma T^4}{\pi}} \; 
    \underbrace{\int_A \ dA}_{4\pi R_*^2} \; 
    \underbrace{\int^{2\pi}_0 d\phi  \int^{\pi}_0 \sin{\theta} \cos{\theta} \ d\theta}_{\int \cos{\theta} \ d\Omega}
    \\[6pt] &= \frac{\sigma T^4}{\pi} \; 4\pi R_*^2 \; \underbrace{2\pi\left[- \frac12 \cos^2{\theta}\right]^{\frac{\pi}2}_0}_{\pi}
    \\[6pt] &= 4\pi R_*^2 \sigma T^4
    \end{align} \] </div>

#### Effective temperature

The effective temperature is the temperature the star would have if it were a perfect black body.

<div class=eqn> \[ L_* = 4\pi R_*^2 \sigma T_\text{eff}^4 \] </div>

Objectively speaking, this is kinda useless, because stars ain't perfect black bodies.

### TL;DR

- Stars are the big glowy things in the sky
- The sun is the biggest and glowiest star of 'em all
- The total energy output of a star across all wavelengths is its luminosity, and it's energy output at a particular distance across all wavelengths is its flux
- Magnitudes measure how bright stars are, where lower magnitudes mean brighter stars
