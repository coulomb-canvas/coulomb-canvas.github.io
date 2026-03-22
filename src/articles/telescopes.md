---
subid: telescopes
topic: astro
title: Telescopes
---

*Fun fact, did you know that the building in Warwick Uni called the Oculus gets its name from the Latin word for 'eye'? Neat, huh?*

Somewhat impressively, we have managed to go *three* whole subtopics in a section about mentioning telescopes even once? I think that deserves a round of applause!!

### Different types of telescope

#### Refracting Telescope

<div class="container">
    <div class="text">
        <p> 
            Refracting telescopes take all the light and focus it onto one point with a lens. Whilst this is not much of a problem for relatively small telescopes, as you try to build telescopes with larger and larger diametres, it becomes more and more difficult to create a lens which can do that well. So for larger diametres, we tend to use the other option:
        </p>
    </div>
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box">
                <img src="images/Astronomy/Refracting telescope.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip" style="left:-40%;"> <div class="image-tooltip-title">
                Figure 1: Refracting telescope
            </div><div class="image-tooltip-desc">
                A lens focuses the light beams to a single point (called the focal point). The distance from the lens to that point is called the focal length, \(f\).
            </div></span>
        </div>
    </div>
</div>

#### Reflecting Telescope

<div class="container">
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box left-box">
                <img src="images/Astronomy/Reflecting telescope.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip left-box" style="left:100%;"> <div class="image-tooltip-title">
                Figure 2: Reflecting telescope
            </div><div class="image-tooltip-desc">
                A concave mirror focuses parallel light to a focal point behind the mirror; secondary optics redirect light to a usable viewing position.
            </div></span>
        </div>
    </div>
    <!-- DIVIDING LINE -->
    <div class="text">
        <p> 
            When the diametres become too big for refraction, reflection telescopes come to the rescue. Instead of using a lens like a refracting telescope, reflecting telescopes use a <em>mirror</em> to reflect (shock) the light to a focal point. This means that for a reflecting point, the focal point is actually behind the mirror.
        </p>
        <p> <span class="hide-on-mobile">
            Now if your like me you might look at the image and think "wait a sec, if the focal point is <em>behind</em> the bloody mirror, how the hell are we supposed to actually put our eye there to see it?"
       </span> </p>
    </div>
    <!-- DIVIDING LINE -->
</div>

<span class="show-on-mobile"> Now if your like me you might look at the image and think "wait a sec, if the focal point is <em>behind</em> the bloody mirror, how the hell are we supposed to actually put our eye there to see it?" </span>

Simple answer, don't worry about it too much. Actual reflection telescopes have some additional features which redirect the light into a position we can actually look at. There are many different methods, but they don't matter. Just remember the reflecty stuff and your good.

#### Combining the two

<div class="container">
    <div class="text">
        <p> 
            If you're lucky (and rich), you might get a telescope which does a bit o' both, which has a lens <em>and</em> a mirror. Here is an example of one of such telescope structures, called the <em>Dall-Kirkham</em> telescope. The mirrors position the light to a certain point, and the <em>corrector lens</em> positions it neatly to a focal point.
        </p>
    </div>
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box">
                <img src="images/Astronomy/Combined telescope.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip" style="left:-40%;"> <div class="image-tooltip-title">
                Figure 3: Dall-Kirkham telescope
            </div><div class="image-tooltip-desc">
                Some fancy telescopes reflect the light to a certain location (reflection), before being focused into the focal point by a lens (refraction).
            </div></span>
        </div>
    </div>
</div>

I doubt you'll ever have to learn any particular models (or about these combined ones in general to be fair), but it's good info I guess.

From this point onwards we'll pretty much only talk about refracting telescopes, because they make the most sense intuitively and are also easier to draw. Having said that everything I'm about to talk about applies to both.

### Cameras

Bloody cameras? I thought we were talking about telescopes?

Let's say we have two stars, which we'll give the creative names *star 1* and *star 2*. Let's say that these 2 stars in the sky are separated by an angle of \\( \\alpha \\).

Each star will emits light rays in every possible direction. However, since stars are so bloody far away, the ones that actually reach us are near enough parallel.

<div class="container">
    <div class="text">
        <p> 
            Now we will look at a very basic telescope, which is just a lens with diametre \( D \), focusing light on a sheet. As we already know, the distance from the lens to the focal point is the focal length, \( f \). We'll also say that the distance between one focal point and the next is \( l \).
        </p>
        <p> 
            If our angle us small enough, then we can use our small angle approximation (\( \sin{\alpha} = \alpha \)) to get a relation between the two lengths and the angle:
        </p>
        <div class="hover-wrapper">
            <div class="formula-container">
                <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
                    \[ l = \alpha f \]
                </div>
                <span class="formula-tooltip"><div class="formula-tooltip-title">
                    Formula 1: Plate Scale
                </div><div class="formula-tooltip-desc">
                    Relates the physical separation \(l\) of two focal points to the angular separation \(α\) of two objects and the focal length \(f\). Valid under the small angle approximation.
                </div></span>
            </div>
        </div>
    </div>
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box">
                <img src="images/Astronomy/Camera.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip" style="left:-40%;"> <div class="image-tooltip-title">
                Figure 4: Plate scale diagram
            </div><div class="image-tooltip-desc">
                Two stars separated by angle α produce focal points separated by l = αf on the focal plane.
            </div></span>
        </div>
    </div>
</div>

### Extended Objects

Up until now, we've thought about each object as a single point in the night sky. That's not a problem for most stars, since they appear so tiny that they may as well be a single point. But what about the sun? Or the moon? Or planets, comets, nebulae, galaxies?

These are what we call *extended object*, objects which are big enough that we can actually measure what portion of the night sky they take up.

### Diffraction Limit

What if we have two objects which are so close together in the sky, that to us it looks like one big object? Well then there's nothing much we can really do. But what I *can* tell you is the closest together things can get before we can no longer tell 'em apart.

The derivation is quite long, with like Bessel functions and stuff (I'd know because, by pure co-incidence, we literally *just* went through the derivation in our Second Year 'Mathematical Methods for Physics' lecture right before I'm now typing this, fun right?), but the smallest angle between two objects a telescope with a circular lens of diametre \\( D \\) can differentiate between is given by:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \alpha_\text{min} = 1.22 \frac{\lambda}D \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: Diffraction limit
        </div><div class="formula-tooltip-desc">
            Minimum resolvable angular separation for a circular lens of diameter \(D\) at wavelength \(\lambda\).
        </div></span>
    </div>
</div>

...with \\( \\lambda \\) being our good friend wavelength. Of course, this is the BEST we can do ever. If the telescope is actually just trash, then it would be larger.

### Magnification

The final piece of the puzzle we need to consider when looking at telescopes is the looky thing (MCKA the *eyepiece*) itself. The job of the looky thing is to take the image which the lens squished into the focal point and make it big enough for our human eye to be able to pick up. In other words, it *magnifies* the image.

<div class="container">
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box left-box">
                <img src="images/Astronomy/Magnification.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip left-box" style="left:100%;"> <div class="image-tooltip-title">
                Figure 5: Telescope magnification
            </div><div class="image-tooltip-desc">
                The objective lens focuses two stars to the focal plane; the eyepiece collimates and enlarges the image. Magnification \(M = f_1/f_2\) follows from the small angle approximation at each lens.
            </div></span>
        </div>
    </div>
    <!-- DIVIDING LINE -->
    <div class="text">
        <p> 
            Avert your attention to this here image. The first lens, the objective lens, takes the light from the two stars and squishes them down at their focal points (on a line known as the <em>focal plane</em>). Like I said it's pretty useless at this point, since our eyes can't see stuff which is that bloody small. 
        </p>
        <span class="hide-on-mobile"><p>
            So the light then continues on until it gets big enough for us to see. Slight problem though, since all the light that was at the top is now at the bottom and vice versa, that actually means that the image we now have is <em>upside down</em>. 
        </p>
        <p>
            So at the point where the image is big enough, we put the eyepiece (or <em>ocular lens</em> if you'd like), which straightens the light beams back out, but points them is such a direction that they are flipped back to their correct direction. 
        </p></span>
    </div>
    <!-- DIVIDING LINE -->
</div>

<span class="show-on-mobile">
<p>So the light then continues on until it gets big enough for us to see. Slight problem though, since all the light that was at the top is now at the bottom and vice versa, that actually means that the image we now have is <em>upside down</em>. </p>

<p>So at the point where the image is big enough, we put the eyepiece (or <em>ocular lens</em> if you'd like), which straightens the light beams back out, but points them is such a direction that they are flipped back to their correct direction. </p>
</span>

Notice now there are two alphas, one when the light rays cross the first time (as they enter the objective lens) and another one as they cross the second time (after they are flipped by the ocular lens). We'll name the first one \\( \\alpha_1 \\) and the second one \\( \\alpha_2 \\).

There are also two focal lengths, the length between the objective lens and the focal plane (which we'll call \\(f_1\\)), and the length between the ocular lens and the focal plain (which we'll call \\(f_2\\)).

<p>Why the heck does this matter you wonder? Well remember how we used a small angle to approximate that little \( l \) distance? If you use the exact same logic you did with the first lens, you'll notice that we can actually do the same approximation with the second angle and second focal length:</p>\[ l = \alpha_1 f_1 = \alpha_2 f_2 \]

So since \\( \\alpha_1 f_1 = \\alpha_2 f_2 \\), we can actually figure out how much the image is being magnified. If \\( \\alpha_1 \\) is the actual angular difference of the two objects in the sky. and \\( \\alpha_2 \\) is the angular difference in the eyepiece which we actually see, then we can calculate how many times bigger the image simply by dividing \\( \\alpha_2 \\) by \\( \\alpha_1 \\)

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ M = \frac{\alpha_2}{\alpha_1} = \frac{f_1}{f_2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X: Magnification
        </div><div class="formula-tooltip-desc">
        Angular magnification equals the ratio of objective focal length f₁ to eyepiece focal length f₂.
        </div></span>
    </div>
</div>






