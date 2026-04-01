---
subid: optics
title: Optics
topics: maths2
---

*The fight I fought to finally get that double closed integral symbol to render... and it turns out the solution was just to switch from MathJax 3 to MathJax 4?!*

### Plane waves

A plane wave

<div class=eqn> \[ f(x, t) = Ae^{±i(kx±\omega t)} \] </div>

Then by using the dispersion relation we had last time, we learnt that \\( \\omega^2 = c^2k^2 \\), meaning \\( \\omega = ck \\). Plugging that into out formula gives us

<div class=eqn> \[ f(x, t) = Ae^{±ik(x±ct)} \] </div>

We can generalise this to 3D:

<div class=eqn> \[ f(\vec{r}, t) = Ae^{i(\vec{k}\cdot\vec{r}±\omega t)} \] </div>

In case you are somewhat new here and you are wondering how the hell \\( k \\), which basically measures how squished together the wave is (so it's wavelength essentially), can have a direction, it doesn't technically. If you look closely, you'll notice that the plus-or-minus that was before the \\( i \\), which signifies the direction of the wave, is now gone. That's because the direction of the wave is absorbed into \\( \\vec{k} \\).

We can also take the fourier transform

<div class=eqn> \[ \begin{align}
\tilde{f}(\omega, k) &= \mathcal{F}(f(x, t)) \\
&= \iint^{+\infty}_{-\infty} f(x, t)e^{-i(kx-\omega t)} 
\end{align} \] </div>

So with our function:

<div class=eqn> \[ \begin{align}
\tilde{f}(\omega, k) &= \iint^{+\infty}_{-\infty} Ae^{-i(k_0x - \omega_0 t)} e^{-i(kx-\omega t)} \\
&= \iint^{+\infty}_{-\infty} Ae^{-i\left[(k-k_0)x - (\omega-\omega_0) t\right]} \\
&= A \int^{+\infty}_{-\infty} e^{-i(k-k_0)x} \ dx \; \int^{+\infty}_{-\infty} e^{-i(\omega-\omega_0) t} \ dt \\
\end{align} \] </div>

Now remember the definition of the delta function. That means

<div class=eqn> \[ = 4\pi^2 A \ \delta(k-k_0) \ \delta(\omega-\omega_0) \] </div>

Well now we have put ourselves into an interesting spot. We know that a light wave can be written mathematically as a plane wave, \\(  f(x, t) = Ae^{±i(kx±\\omega t)} \\). But what happens to \\( f(x, t) \\) during diffraction?

### Huygen's principle

Each point in a coherent wave front can be regarded as a secondary source of waves, i.e. a point source. The new wave front is the superposition of all secondary point sources.

Unlike plane waves which propagate in a single direction \\( \\hat{k} \\), *point sources* are like little circle-shaped waves which propagate radially outwards. Like dropping a pebble in water.

Thanks to our good friend *energy conservation*, the total energy within that circle (or sphere depending on what we are working with) doesn't change. That means if you integrate the intensity across the whole sphere doesn't change:

<div class=eqn> \[ \begin{align}
\oiint I(r) dS &= 4\pi r^2I(r)\\[6pt]
&= \text{constant}
\end{align} \] </div>

We can consider point sources in 3 dimensions. First the wave equation:

<div class=eqn> \[ \frac{\partial^2 u(t,r)}{\partial t^2} = c^2 \frac{1}{r^2} \frac{\partial}{\partial r} \left[ r^2 \frac{\partial u(t,r)}{\partial r} \right] \ . \] </div>

Going back, we know \\( U(r, t) \\) must be inversely proportional to the distance

<div class=eqn> \[ u(r, t) = \frac{v(r, t)}{r} \ . \] </div>

Plug that in

<div class=large-eqn> \[ \begin{align*}
\frac{1}{r} \frac{\partial^2 v(t,r)}{\partial t^2} &= c^2 \frac{1}{r^2} \frac{\partial}{\partial r} \left[ r^2 \frac{\partial}{\partial r} \left( \frac{v(t,r)}{r} \right) \right] \ , \\[6pt]
&= c^2 \frac{1}{r^2} \frac{\partial}{\partial r} \left[ r \frac{\partial v(t,r)}{\partial r} - v(t,r) \right] \ , \\[6pt]
&= c^2 \left[ \frac{1}{r} \frac{\partial^2 v(t,r)}{\partial r^2} + \frac{1}{r^2} \frac{\partial v(t,r)}{\partial r} - \frac{1}{r^2} \frac{\partial v(t,r)}{\partial r} \right] \ , \\[6pt]
&= c^2 \frac{1}{r} \frac{\partial^2 v(t,r)}{\partial r^2} \ .
\end{align*} \] </div>

That gives

<div class=eqn> \[ u(r, t) = \frac{A}{r} e^{i(kr - \omega t)} = \frac{A}{r} e^{ik(r - ct)} \ . \] </div>

### Diffraction

#### Single Pinhole

If we have a single pinhole, then we know that only a single wave can go through it. That means the total wave is just:

<div class=eqn> \[ u(r, t) = \frac{A}{r} e^{i(kr - \omega t)} \ . \] </div>

Then to get the intensity we just look for the modulus squared:

<div class=eqn> \[ I(r) = |u(r, t)|^2 = \frac{A^2}{r^2} e^{i(kr - \omega t)} e^{-i(kr - \omega t)} \ . \] </div>

#### Double Pinhole

If we have two pinholes, then two waves can go through it. That means the total wave is the sum of two general waves:

<div class=eqn> \[ u(r, t) = \frac{A_1}{r_1} e^{i(kr_1 - \omega t)} + \frac{A_2}{r_2} e^{i(kr_2 - \omega t)} \ . \] </div>

Te get the intensity we do the same modulus squared thingy, except we now have a slightly uglier equation to work with.

### Far-field Aperture

Since we are so close, we have to consider...

If we move far enough away, such that the distance between the aperture screen and the fringe screen is waaaaay bigger than the distance between the apertures, we can make some nice approximations, which make the maths a lot easier.

An *aperture function* is a function which describes the shape of the hole, \\( a(\\vec{r}') \\). It's zero where there is no hole and non-zero where there is a hole.

<div class=eqn> \[
u(t, \vec{r}) \approx \frac{1}{D} e^{i(k|\vec{r}| - \omega t)} \iint_{-\infty}^{+\infty} a(\vec{r}') e^{-i\vec{k} \cdot \vec{r}'} \, dx' \, dy' \ .
\] </div>

Hey, does that right side look familiar to you?

Well it should, it's the fourier transform

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ u(\vec{r}, t) \approx \frac{1}{D} e^{i(k|\vec{r}| - \omega t)} \tilde{a}(\vec{k}')  \ . \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

So the way we find these interference patterns is:

- Define \\( a(\\vec{r}') \\)
- Use the fourier transform to turn it into \\( \\tilde{a}(\\vec{k}) \\)
- Divide it by \\( D \\) and then times it by a plane wave <span class=formula-emph>\\( \mathbf{\left[e^{i(k|\vec{r}| - \omega t)}\right]}\\)</span>, which gives you \\( u \\).
- Take the modulus squared to get the intensity

### Different shapes

#### Square Aperture

Firstly, we need to determine our aperture function. 

<div class=eqn> \[ \begin{align*}
a(\vec{r}') = \begin{cases} 
1 & |x'| \le \frac{b}2 \text{ or } |y'| \le \frac{b}2 \\ 
0 & \text{otherwise} \ . 
\end{cases} \end{align*} \] </div>

Now with that out of the way, we need to calculate the fourier transform. And word of warning... there's no cute little trick to this. These fourier transforms are long as hell, and you kinda just have to slowly work through them.

Now usually I would just stick the full thing in between a \\\begin{align} and an \\\end{align}. But since these derivations are long and painful, I'll work through the pain with you!

Starting with this square aperture.

**STEP 1: FIND THE FOURIER TRANSFORM**

So this is what we want:

<div class=eqn> \[ \tilde{a}(\vec{k}) = \iint^{+\infty}_{-\infty} a(\vec{r}') e^{-i\vec{k}\cdot\vec{r}} dx' dy' \] </div>

To start, let's split up that double integral. The bounds are in principle from negative infinity to positive infinity, but the actual hole is only from \\( \\frac{b}2 \\) to \\( -\\frac{b}2 \\), so we can replace them accordingly. Also, since the aperture function is just one here, we can replace it, meaning it effectively vanishes:

<div class=eqn> \[ \tilde{a}(\vec{k}) = \int^{+\frac{b}2}_{-\frac{b}2} \int^{+\frac{b}2}_{-\frac{b}2} e^{-i\vec{k}\cdot\vec{r}} dx' dy' \] </div>

We know that the wavenumber vector is given by \\( \\vec{k} = k \\hat{k} \\), where \\( \\hat{k} \\) is just the direction at which the wave propogates.

<div class=eqn> \[ \tilde{a}(\vec{k}) = \int^{+\frac{b}2}_{-\frac{b}2} \int^{+\frac{b}2}_{-\frac{b}2} e^{-ik \frac{\vec{r}\cdot\vec{r}'}{D}} dx' dy' \] </div>

Then remember that \\( \\vec{r} = \\vec{x} + \\vec{y} \\), and \\( \\vec{r}' = \\vec{x}' + \\vec{y}' \\). That means we can split into \\( e^{-i\\frac{kx}{D}x'} e^{-i\\frac{ky}{D}y'} \\).

Why is this useful info? Since \\( x \\) and \\( y \\) are completely independent variables, you can integrate them completely separately:

<div class=eqn> \[ \tilde{a}(\vec{k}) = \int^{+\frac{b}2}_{-\frac{b}2} e^{-i\frac{kx}{D}x'} dx' \int^{+\frac{b}2}_{-\frac{b}2} e^{-i\frac{ky}{D}y'} dy' \] </div>

And now these are much nicer integrals to work with! Just be careful though, we are integrating with respect to \\( x' \\) and \\( y' \\), not just regular \\( x \\) and \\( y \\). That means regular \\( x \\) and \\( y \\) are basically being treated as constants in this integration.

<div class=eqn> \[ \begin{align*}
\tilde{a}(\vec{k}) &= \int^{+\frac{b}2}_{-\frac{b}2} e^{-i\frac{kx}{D}x'} dx' \int^{+\frac{b}2}_{-\frac{b}2} e^{-i\frac{ky}{D}y'} dy' \\[6pt]
&= \Bigg[\frac{D}{-ikx} e^{-i\frac{k}{D}x'} \Bigg]_{-\frac{b}2}^{+\frac{b}2} \; \Bigg[\frac{D}{-iky} e^{-i\frac{k}{D}y'} \Bigg]_{-\frac{b}2}^{+\frac{b}2} \\[6pt]
&= \frac{D}{ikx} \left[ e^{i\frac{kb}{2D}x} - e^{-i\frac{kb}{2D}x} \right] \; \frac{D}{iky} \left[ e^{i\frac{kb}{2D}y} - e^{-i\frac{kb}{2D}y} \right] \; .
\end{align*} \] </div>

Now we've reached this quite ugly function, but we can still nice-ify it a bit. Remember that 

<div> \[ \sin{(ax)} = \frac{e^{iax}+e^{-iax}}{2i}, \quad \sin{(ay)} = \frac{e^{iay}+e^{-iay}}{2i}. \] </div>

Hey, that looks a bit like the term in the brackets, except the \\( a \\) has been replaced with \\( \\frac{kb}{2D} \\). Also, the term in the brackets isn't over two. So that means we just multiply the \\( \\sin{ax} \\) by \\( 2i \\) to get the term in the brackets. So we can now just stick that in:

<div class=eqn> \[ 
\tilde{a}(\vec{k}) = \frac{2D}{kx} \sin \left( \frac{kb}{2D}x \right) \; \frac{2D}{ky} \sin \left( \frac{kb}{2D}y \right) \; .\] </div>

And then

<div class=eqn> \[ 
u(\vec{r}, t) \approx \frac{b^2}{D} e^{i(k|\vec{r}| - \omega t)} \operatorname{sinc} \left( \frac{kb}{2D} x \right) \operatorname{sinc} \left( \frac{kb}{2D} y \right) \ .\] </div>

And to get the intensity, all you've gotta do is square it:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ I(\vec{r}) \approx \frac{b^4}{D^2} \operatorname{sinc}^2 \left( \frac{kb}{2D} x \right) \operatorname{sinc}^2 \left( \frac{kb}{2D} y \right) \ . \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>



#### Rectangular Aperture

Once again, we need to determine the aperture function. It's similar to that of the square, except the \\( x \\) and the \\( y \\) are now different.

<div class=eqn> \[ \begin{align*}
a(\vec{r}') = \begin{cases} 
1 & |x'| \le \frac{b}2 \text{ or } |y'| \le \frac{h}2 \\ 
0 & \text{otherwise} \ . 
\end{cases} \end{align*} \] </div>

And we could go through that long ass derivation again, but if you pay attention, you notice that it's the same thing, except instead of two \\( b \\)'s (and a \\(b^2\\)), it just becomes a \\( b \\) and an \\( h \\), such that we now have:

<div class=eqn> \[ 
u(\vec{r}, t) \approx \frac{bh}{D} e^{i(k|\vec{r}| - \omega t)} \operatorname{sinc} \left( \frac{kb}{2D} x \right) \operatorname{sinc} \left( \frac{kh}{2D} y \right) \ .\] </div>

And therefore:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ I(\vec{r}) \approx \frac{b^2h^2}{D^2} \operatorname{sinc}^2 \left( \frac{kb}{2D} x \right) \operatorname{sinc}^2 \left( \frac{kh}{2D} y \right) \ . \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

#### Young’s double slit apertures

Bet you didn't see this coming! Or at least I didn't. If you have two of these rectangular apertures, you end up with Young's Double slit experiment! Ain't that cool?

Using convolution, we can think of this as a single rectangle function being convolved onto two delta functions at the positions of the two slits.

<div class=eqn> \[ a(\vec{r}') = a_0(\vec{r}') * G(\vec{r}') \] </div>

For the 2 delta functions:

<div class=eqn> \[ G(\vec{r}') = \left[ \delta \left( \vec{r}' + \frac{\Delta s}{2} \hat{x} \right) + \delta \left( \vec{r}' - \frac{\Delta s}{2} \hat{x} \right) \right] \ , \] </div>

We know that, to get the fourier transform of aa convolution, we simply take the product of each function fourier transformed.

<div class=eqn> \[ \begin{align} \mathcal{F}(a(\vec{r}')) &= \mathcal{F}(a_0(\vec{r}') * G(\vec{r}')) \\[6pt]
&= \tilde{a}_0(\vec{k}) \tilde{G}(\vec{k}) \end{align} \] </div>

We already know what \\( \\tilde{a}_0(\\vec{k}) \\) is from before:

<div class=eqn> \[ 
\tilde{a}_0(\vec{k}) \approx bh \operatorname{sinc} \left( \frac{kb}{2D} x \right) \operatorname{sinc} \left( \frac{kh}{2D} y \right) \ .\] </div>

We need to calculate the fourier transform of \\( G(\\vec{r}') \\)

<div class=large-eqn> \[ \tilde{G}(\vec{k}) = \iint^{+\infty}_{-\infty} \left[ \delta \left( \vec{r}' + \frac{\Delta s}{2} \hat{x} \right) + \delta \left( \vec{r}' - \frac{\Delta s}{2} \hat{x} \right) \right] e^{-i\vec{k}\cdot\vec{r}} dx' dy'\] </div>

We separate the x's and y's

<div class=large-eqn> \[ \tilde{G}(\vec{k}) = \int^{+\infty}_{-\infty} \left[ \delta \left( x' + \frac{\Delta s}{2} \hat{x} \right) + \delta \left( x' - \frac{\Delta s}{2} \hat{x} \right) \right] e^{-ik_x x'} dx' \int^{+\infty}_{-\infty} \delta(y') e^{-ik_y y'} dy'\] </div>

We know that if we have a delta function \\( \\delta(x-y) \\), and multiply it by a function \\( f(x) \\), before integrating the product over all space, it evaluates the function at \\( y \\). In our equation, we have three instances of this.

We are then left with:

<div class=eqn> \[ \tilde{G}(\vec{k}) = e^{i\frac{k_x \Delta s}{2}} + e^{-i\frac{k_x \Delta s}{2}} \] </div>

Then

<div class=eqn> \[ \tilde{G}(\vec{k}) = 2\cos{\frac{k_x \Delta s}{2}} \] </div>

That took a while, but now we're at the easy bit. Like I said a while ago, if you want to get the fourier transformation of a convolution, all you have to do is calculate each function's individual fourier transform and then multiply them together.

<div class=large-eqn> \[ \begin{align} \tilde{a}(\vec{k}') &= \tilde{a}_0(\vec{k}) \tilde{G}(\vec{k}) \\[6pt]
&= 2 bh \operatorname{sinc} \left( \frac{kb}{2D} x \right) \operatorname{sinc} \left( \frac{kh}{2D} y \right) \cos{\left( \frac{k_x \Delta s}{2} \right) } \end{align} \] </div>

Now calculating \\( u \\) is easy:

<div class=large-eqn> \[ u(\vec{r}, t) = \frac{2bh}{D} e^{i(kr-\omega t)} \operatorname{sinc} \left( \frac{kb}{2D} x \right) \operatorname{sinc} \left( \frac{kh}{2D} y \right) \cos{\left( \frac{k_x \Delta s}{2} \right) }  \] </div>

And finally we just mod-square everything to get the intensity:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box large-eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ I(\vec{r}) \approx \frac{4b^2h^2}{D^2} \operatorname{sinc}^2 \left( \frac{kb}{2D} x \right) \operatorname{sinc}^2 \left( \frac{kh}{2D} y \right) \cos^2{\left( \frac{k\Delta s}{2D} x \right)}\ . \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

#### Diffraction grating

<div class=eqn> \[ G(\vec{r}') = \sum^N_{n=1} \left[ \delta \left( \vec{r}' + n\frac{\Delta s}{2} \hat{x} \right) + \delta \left( \vec{r}' - n\frac{\Delta s}{2} \hat{x} \right) \right] \ . \] </div>

### Circular Aperture

<div class=eqn> \[ \begin{align*}
a(\vec{r}') = \begin{cases} 
1 & |\vec{r}'| \le R \ , \\ 
0 & |\vec{r}'| > R \ . 
\end{cases} \end{align*} \] </div>

### TL;DR

Now do you have to memorise these derivations?

...noooooo, I don't think? But either way, you should practice them a lot

