---
subid: vec-calculus
title: Vector Calculus
topic: maths2
---

The big three operators, the grad, div and curl.

### Gradient <em>('grad')</em>

The gradient isn't something new, so I won't spend too long on it. In short, it takes a scalar field and turns into a vector field. 

Let's say we have a scalar field, like temperature

### Divergence <em>('div')</em>

However, simply having the arrows isn't always the most useful; sometimes we'd wanna know how these arrows behave. And the divergence is one tool we can use to achieve this.

The divergence is calculated simply by taking the gradient function and dotting it with the vector, rather than just applying it:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \text{div } \vec{v} = \nabla \cdot \vec{v} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: Curl Grad
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class=eqn> \[ \vec{\nabla} \cdot \vec{v} = \left( \frac{\partial v_x}{\partial x} \right) + \left( \frac{\partial v_y}{\partial y} \right) + \left( \frac{\partial v_z}{\partial z} \right) \] </div>

The divergence tells us how much of something enters or exits a surface.

If div is zero, then it means that there is no net flux, or in other words, every arrow which enters the surface also exits the surface.

### Curl

This next operater's name pretty much 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \text{curl } \vec{v} = \vec{\nabla} \times \vec{v} = \begin{vmatrix} \vec{\hat{i}} & \vec{\hat{j}} & \vec{\hat{k}} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ v_x & v_y & v_z \end{vmatrix} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: Curl Grad
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

But here's one thing you have to bear in mind. The curl measures how much a vector field *causes* objects to rotate, not how much the field rotates itself.

### Combinations

#### Grad Squared (the Laplacian)

We went over this one already, so I won't waste too much time on it now. In short, you just apply the gradient function, and then apply it again. In other words, you take the second derivatives instead of the first derivatives

<div class=eqn> \[ \Box \phi = 0 \] </div>

#### Curl Grad

Now time for, what I like to call, the curly gradient. The curly gradient

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{\nabla} \times ( \vec{\nabla} \phi ) = 0 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: Curl Grad
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

#### Div Curl

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{\nabla} \cdot ( \vec{\nabla} \times A ) = 0 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: Curl Grad
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

#### Grad Div

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{\nabla} ( \vec{\nabla} \cdot a ) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: Curl Grad
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

#### Curl Curl

Finally, the curly swirly curly curly

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{\nabla} \times ( \vec{\nabla} \times \vec{a} ) = \vec{\nabla} ( \vec{\nabla} \cdot \vec{a} ) - \nabla^2 \vec{a} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: Curl Grad
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Vector integration

<div class=eqn> \[ d\vec{r} = \begin{pmatrix} dx \\ dy \\ dz \end{pmatrix} \] </div>

With this in mind, there are 3 ways we can integrate this tiny vector thingy over the field.

A conservative field is one in which the path doesn't change the outcome.

To prove that a field is conservative, you need to show that the curl in the vector field is zero


