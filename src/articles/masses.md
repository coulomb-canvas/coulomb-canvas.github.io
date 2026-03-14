---
subid: masses
title: Astronomical Bodies
topic: astro
---


### Binary Stars

Usually, trying to figure out the mass of any one star is pretty difficult. However, God has given us one phenomenon to make our lives slightly easier: *binary stars*!

<div class="container">
    <div class="text">
        <p> 
            Binary stars are two stars which kinda just dance around each other. Although there technically isn't a distinct mass for them to orbit around, the two stars have a combines <em>centre of mass</em>, which they dance around.
        </p>
        <p>
            If we consider the equations for centre of mass, we will come to the conclusion that for this to happen, the mass times the distance of each star is the same
        </p> \[ m_1 r_1 = m_2 r_2 \]
    </div>
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box">
                <img src="images/Astronomy/Binary star.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip" style="left:-40%;"> <div class="image-tooltip-title">
                Figure 1: Binary star
            </div><div class="image-tooltip-desc">
                ...
            </div></span>
        </div>
    </div>
</div>

<p>That means that the heavier star is closer to the middle and the lighter star is further. Next we can look at their velocities: since they are orbiting in a circle, we can use the equation for centripetal force and equate it to the gravitational force:</p> \[ \cancel{m_1} \omega^2 r_1 = \frac{G \cancel{m_1} m_2}{R^2} \quad \text{and} \quad \cancel{m_2} \omega^2 r_2 = \frac{G m_1 \cancel{m_2}}{R^2} \]

If we shuffle the variables around, we eventually get an equation for the angular frequency (well, angular frequency *squared*):

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \omega^2 = \frac{4 \pi^2}{P^2} = \frac{G(m_1 + m_2)}{R^2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Frequency of binary stars
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Binary star spectroscopy

<div class="container">
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box left-box">
                <img src="images/Astronomy/Spectra binary.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip left-box" style="left:100%;"> <div class="image-tooltip-title">
                Figure 2: A spectrum of 2 stars
            </div><div class="image-tooltip-desc">
                ...
            </div></span>
        </div>
    </div>
    <!-- DIVIDING LINE -->
    <div class="text">
        <p> 
            Binary star systems can often rotate <em>reeeeeally</em> quickly, which means that the stars end up being very close together. So close together that we can't tell 'em apart just by looking at them. So whilst their positions are useless to us, their <em>speeds</em> give us something to work with. When stars move at different speeds, their spectra also appear slightly different as a result.
        </p>
        <p>
            This is all thanks to the <em>Doppler effect</em>, which we described in a bit more detail back in the <a href="http://127.0.0.1:5500/topic.html?topic=relativity">Special Relativity</a> section. In short, when things move towards us, the waves they emit get squashed. When things move away from us, the waves they emit get stretched. The relation between the waves' original wavelength \( \lambda_0 \) and their measure wavelength \( \lambda \) is given by this formula:
        </p>
        \[ 
            \frac{\lambda}{\lambda_0} = \frac{1+\frac{v}{c}\cos{\theta}}{\sqrt{1-\left(\frac{v}{c}\right)^2}} 
        \]
    </div>
    <!-- DIVIDING LINE -->
</div>

*Oh, and you might notice that there's now a cosine that wasn't there when we did relativity. That's because in the relativity section we assumes the waves were coming head on, but now we aren't assuming that, just don't think about it too much.*

Now stars can be pretty quick, but they aren't *that* quick. Compared to the speed of light, stars move relatively slowly, meaning that \\( \\frac{v}{c} \\) is near enough 0 that the square root denominator term is basically just 1. That means we can ignore it, giving us our new formula for wavelength:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \lambda_\text{observed} = \lambda_0 (1+\frac{v}{c}\cos{\theta}) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Doppler shift of stars
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

If we can successfully use this Doppler thing to measure the speeds at which the stars move, then since speed in circular motion is the angular frequency times by the radius (\\( v = \\omega r \\)), we can calculate the radii of the two stars, meaning we can bring back formula 1 and use it to calculate the masses of the stars as before.

### Gravitational Lensing

<div class="container">
    <div class="text">
        <p> 
            We know that gravity attracts masses, but by some miracle (i.e. General relativity), it can also attract light. An object with mass \( M \) can cause a light ray to very slightly bend towards it
        </p>
        \[ 
            \Delta \alpha = \frac{4GM}{c^2 r} 
        \]
        <p>
            ... where \( \Delta \alpha \) is the angle it's being deflected and \( r \) is the distance the light ray is from the mass.
        </p>
    </div>
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box">
                <img src="images/Astronomy/Grav Lens.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip" style="left:-40%;"> <div class="image-tooltip-title">
                Figure 3: Gravitational Lensing
            </div><div class="image-tooltip-desc">
                ...
            </div></span>
        </div>
    </div>
</div>

That means that light coming from behind the object can be bent and concentrated into a single point. Light being squished into a single point, where have I heard that before....

*A lens*!


<div class="container">
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box left-box">
                <img src="images/Astronomy/Einstein Ring.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip left-box" style="left:100%;"> <div class="image-tooltip-title">
                Figure 3: The Einstein ring
            </div><div class="image-tooltip-desc">
                ...
            </div></span>
        </div>
    </div>
    <!-- DIVIDING LINE -->
    <div class="text">
        <p> 
            Yeah, bet you didn't expect a collab between Astronomical masses and Telescopes did you? This means if there is a light emitting object (like a star) behind a mass, some of that light is bent such that you can see it on the other side.
        </p>
        <p>
            This is most noticeable during an <em>eclipse</em>. You may have wondered why you can still see the light from the sun when the moon is blocking it. This is why!
        <p>
    </div>
    <!-- DIVIDING LINE -->
</div>

That little ring you see around the moon during an eclipse is called the *Einstein Ring*, and in the instance that the masses are perfectly aligned, the radius of the Einstein ring, \\( \\Theta_E \\), is:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \Theta_E = \sqrt{ \frac{4GM}{Dc^2} } \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: Einstein Ring Radius
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Do remember that this is only if everything aligns PERFECTLY, which it probably won't.



