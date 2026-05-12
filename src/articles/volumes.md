---
subid: volumes
title: Surfaces and Volumes of Revolution
topic: maths2
---

Remember before we had our path \\(s\\) and we wanted to figure out how much \\(s\\) changes with respect to \\(x\\) and \\(y\\) (or more precisely, how \\(ds\\) changes with respect to \\(dx\\) and \\(dy\\)).

Look at this image. We can create a right angled triangle, and then using the OG pythagoras formula, we get:

<div class=eqn> \[ ds^2 = dx^2 + dy^2 \] </div>

And you might be a bit confused here, since \\(dx\\) and \\(dy\\) are supposedly infinitely small, and yet \\(dx\\) is clearly bigger than \\(dy\\). Answer: don't worry about it. Technically you are correct, but since they are *infinitely* small, they are assumed to be small enough that the difference in length isn't actually useful and can therefore be ignored.

Again, using our scandalous physics-mathematics, we can rewrite \\(dy\\) like this:

<div class=eqn> \[ dy = \frac{dy}{dx} \cdot dx \] </div>

That means our Pythagoras equation now looks like this:

<div class=eqn> \[ ds^2 = dx^2 + \left( \frac{dy}{dx} \cdot dx \right)^2 \] </div>

And then by taking the square root, we get a value for \\( ds \\):

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ ds = dx \sqrt{1 + \left( \frac{dy}{dx} \right)^2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: ds
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>


*And if you want you can switch the \\(y\\)s and the \\(x\\)s around, like this:*

<div class=eqn> \[ ds = dy \sqrt{1 + \left( \frac{dx}{dy} \right)^2} \] </div> 

### Jacobeans

<div class=eqn> \[ J = \frac{ \partial (x, y, z) }{ \partial (u, v, w) } \] </div>

<div class=eqn> \[ dV = dx \; dy \; dz = |J| du \; dv \; dw \] </div>

<div class=eqn>\[
J = \frac{\partial(x, y)}{\partial(\rho, \phi)} = \begin{vmatrix} \frac{\partial x}{\partial \rho} & \frac{\partial x}{\partial \phi} \\ \frac{\partial y}{\partial \rho} & \frac{\partial y}{\partial \phi} \end{vmatrix}
\] </div>

<div class=eqn>\[
J = \frac{\partial(x, y, z)}{\partial(r, \theta, \varphi)} = \begin{vmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} & \frac{\partial x}{\partial \varphi} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta} & \frac{\partial y}{\partial \varphi} \\ \frac{\partial z}{\partial r} & \frac{\partial z}{\partial \theta} & \frac{\partial z}{\partial \varphi} \end{vmatrix}
\] </div>

### Volumes of revolution

<div class=eqn>\[ dA = ds y \, d\theta \] </div>

That gives us a single strip We can integrate this over the full circle:

<div class=eqn>\[ A = \int_{s_1}^{s_2} 2 \pi y \, ds \] </div>

Now, this isn't the main thing we are looking forward to here, but we can actually do a fair bit with this already. Let's say we have a line \\( y = \frac{x}3 \\). You can probably see that if we were to rotate this round, you'd end up with a cone shape. So we are calculating the surface area of the pointy part of the cone.

Using our substitution for \\( ds \\):

<div class=eqn>\[ A = \int_{s_1}^{s_2} 2 \pi y \, \sqrt{1 + \left( \frac{dy}{dx} \right)^2} dx \] </div>

We know \\( y \\) is \\( \frac{x}3 \\). Then differenciating it gives us \\( \frac{dy}{dx} = \frac13 \\). So putting that in:

<div class=eqn>\[ \begin{align} A &= \int_{s_1}^{s_2} 2 \pi \frac13 \, \sqrt{1 + \left( \frac13 \right)^2} dx \\[6pt] &= \int_{s_1}^{s_2}  \frac{2 \pi}3 \, \sqrt{ \frac{10}9 } dx \end{align} \] </div>

That means:

<div class=eqn>\[ \begin{align} A &= \frac{2 \pi}3 \, \sqrt{ \frac{10}9 } \int_{x=0}^{x=3} x dx \\[6pt] &= \frac{2 \pi}3 \, \sqrt{ \frac{10}9 } \bigg[ \frac{x^2}2 \bigg]^3_0 \\[6pt] &= \pi\sqrt{ 10 }  \end{align} \] </div>

That was just by the way. Anyway, where were we? Oh yes, volumes of revolution.

So remember from a while ago, how to get the centre of a shape:

<div class=eqn>\[ \bar{y} = \frac{ \int y \ ds }{ \int ds } \] </div>

Times both sides by \\( 2\pi \\):

<div class=eqn>\[ 2\pi \bar{y} = \frac{ \int 2\pi y \ ds }{ \int ds } \] </div>

Now \\( \int ds \\) is just \\( S \\), giving us

<div class=eqn>\[ 2\pi \bar{y} = \frac{ A }{ S} \] </div>

Then just by rearranging, we get:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ A = 2 \pi \bar{y} S \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Pappus' (2nd) theorem
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

As as usual, you're thinking...

It turns out, it's actually the same old "area is length times width" that we all know and love, just in a new form.

If \\( S \\) is the length, \\( 2 \pi \bar{y} \\) is the distance the centroid is travelling

Therefore, by using the same logic, if we have a closed surface and we want to know the total volume enclosed, all we have to do is replace the \\( S \\) with \\( A \\), the area enclosed by the path \\( s \\).

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ V = 2 \pi \bar{y} A \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: Pappus' (1st) theorem
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>



