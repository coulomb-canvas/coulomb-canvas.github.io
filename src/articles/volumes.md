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
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
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

<div class=eqn>\[ A = \int_{s_1}^{s_2} 2 \pi y \, ds \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ A = 2 \pi \bar{y} S \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Pappus' (2nd) theorem
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ V = 2 \pi A \bar{y} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: Pappus' (1st) theorem
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>



