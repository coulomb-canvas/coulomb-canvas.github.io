---
subid: colours
title: Black-Bodies and Colour
topic: astro
---

Everything emits and absorbs radiation.

Trying to accurately model the energy input and output for any system is a massive pain in the arse. Now, this isn't at all possible, so there is almost no point in me even bringing it up... but *what if* there was such a body which emitted and absorbed every single wavelength of radiation?

That would be a LOT easier to work with. So easy to work with, in fact, that I might just end up writing an entire pages worth of information about how this would hypothetically work, even though this can never ever *ever* happen!

### Black-Body Radiation

<p>JUMPSCARE FORMULA!!</p>\[ B_\lambda(T) = \frac{2 \pi hc^2 }{ \lambda^5 (e^{\frac{hc}{k_BT\lambda}}-1)}\]

Let me do an impression of how I think you just reacted...

"jkshjahjdasjk WHAT? What the bloody 'ell is that m8? Not even a hi, how are things?"

This is something called Planck's law, and it tells us how much energy each wavelength emits per second. Never fear, the formula itself is likely not of much used to you, so calm down m8.

<div class="container">
    <div class="text">
        <p> 
            What you will need to know is what this formula looks like in graph mode. There are 5 main things you need to remember:
            <ol>
                <li>At short wavelengths, it drops very quickly. This is called <em>Wein's tail</em></li>
                <li>At larger wavelengths, it drops more gradually. This is called <em>Rayleigh-Jane's tail</em></li>
                <li>The spectrum gets taller, sharper and shifts to the right as temperature increases. Also notice it        increases ALL of the wavelengths, hence why the two temperatures will never cross.</li>
                <li>The spectrum is smooth, with no cuts in it.</li>
            </ol>
        </p>
    </div>
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box">
                <img src="images/Astronomy/Planck's Law.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip" style="left:-40%;"> <div class="image-tooltip-title">
                Figure 1: Planck spectrum
            </div><div class="image-tooltip-desc">
                Spectral radiance B_λ(T) vs wavelength for two temperatures. 
                <ul>
                    <li>Higher-temperature curves are taller, narrower, and peak at shorter wavelengths.</li>
                    <li>Wien's tail is the steep short-wavelength drop; Rayleigh-Jeans is the gentler long-wavelength drop. </li>
                    <li>Curves never cross.</li>
            </div></span>
        </div>
    </div>
</div>

### Wien's Displacement law

<p>Since the peaks move to the left with temperature, it would be fair to say that the peak wavelength is inversely proportional to the wavelength. And you'd be correct! Give yourself a pat on the back!</p> \[ \lambda_\text{max} \propto \frac1T \quad \text{or} \quad \lambda_\text{max}T = \text{some constant} \]

Luckily for us, Wien (the sharp-falling tail guy) spoke with the game devs and managed to figure out what said constant is:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \lambda_\text{max} T = 2.898 \times 10^{−3} \text{m K}  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Wien's Displacement Law
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

I could be wrong here... but I think you *do* have to remember this. Then again, if 2.898 is too hard of a number for you to remember, they'll probably take 2.9 as a valid answer.

### Stefan-Boltzmann Law

<p>If we want to know the total power per unit area of the body, (we'll call it, erm IDK, how about \(J\), is that alright?), we'd have to get the energy output for each individual wavelength (\(B_\lambda\) for each \( \lambda \)) and then add 'em all together. You know what that means, we have to <em>integrate!!</em></p>\[ J = \int_0^\infty B_\lambda d\lambda \]

Now I'm sure you'd agree, that is not what I want to be spending my Thursday evening doing. And luckily you don't have to; Stefan and Boltzman spent *their* Thursday evening doing it instead. And turns out it works out quite nicely actually:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ J = \sigma T^4  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Stefan-Boltzmann Law
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

...where \\( \\sigma \\) is a brand new constant they magicked up, called the *Stefan-Boltzmann constant* (real creative guys...), with a value of \\( \\sigma = 5.670 \\times 10^{−8} \text{ W m}^{−2}\\text{ K}^{−4} \\)

And here we're about to come full circle! Remember that luminosity is the amount of energy radiated per second. And what we have here is the amount of energy radiated per second... per unit area. So if we multiply our \\( J \\) with the surface area of a sphere, \\(4 \\pi r^2 \\) (assuming stars are spherical of course, then again they are near enough that it's an assumption worth making), then we get the formula for the luminosity of a star:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ L_* = 4 \pi R_*^2 \sigma T_\text{eff}^4 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: Luminosity of a star
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

... where \\( R_* \\) is the radius of the star and \\( T_\\text{eff} \\) is the *effective temperature* of the star.

*I can't put it into words, but I find something deeply amusing about scientists using an asterist (\*) as the symbol for a star. I mean I get that people informally call it a star, but like... you man are scientists, you should be more professional, no? Not complaining tho, keep it that way.*

And BTW, I'm sure you'd like to know what makes this particular temperature so *effective*. It sounds cool at first but it becomes way less cool one it's explained to you. 

In sort, when you think about it, stars don't really have one temperature. Their temperature keeps on increasing until you get to the centre. So in order to get a sort of average value of the temperature for a star, they define the effective temperature, which is the temperature at the star's *photosphere*.

Now you might think "hold on, that's still kinda cool, what were you on about?" As much as this whole photosphere thing sounds cool, do you want to know how they decide what the effective temperature is and where the photosphere it? 

The effective temperature... is literally just the temperature at which the formula just so happens to work.

Yes, they define the effective temperature as the temperature at which that relationship is true. And then they define the radius of the photosphere as the radius at which the relation just so happens to be true. \*FACEPALM\*

Slightly circular reasoning, but whatever, we have an exam to write...

### Colours

A bit like how we defined Vega as having a magnitude of 0, we also define Vega's colours to be zero.