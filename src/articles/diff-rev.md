---
subid: diff-rev
topic: maths2
title: Partial Differentiation (Revisited)
---

Don't worry though, we'll start off this year's topics with something fairly familiar: *partial differentiation*. Much of what we are about to cover is stuff you should hopefully recall from last year, so I won't go into too much detail. But anyway, sit back and enjoy the show!

### Basics

When you have a function which depends on multiple variables (something like \\( f(x,y) \\)), we can choose which variable to differentiate with respect to. We do this by treating the other variables as if they were constants:

<div class=eqn> \[ \frac{\partial f}{\partial x},  \frac{\partial f}{\partial y}\] </div>

Remember we use this cute little curly d (\\( \\partial \\)) instead of the usual d's we use for regular differentiation. You can also chain multiple partial differential operators together: and, at least for now, you can flip 'em around just fine.

<div class=eqn> \[ \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial x} \right)= \frac{\partial^2 f}{\partial x^2}\] \[ \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial y} \right)= \frac{\partial^2 f}{\partial y^2}\] </div>

Also, at least for now, you can flip 'em around just fine.

<div class=eqn> \[ \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial y} \right) = \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial x} \right)\] </div>

### Total differentials

We know that the little d's in front of the variables in differential equations represent an infinitesimally small change in said variable. So let's say we have this equation:

<div class=eqn> \[ f(x) = x^2 \] </div>

If we want to know how much an infinitely small change in \\( x \\) changes our function \\( f(x) \\), we need to calculate \\(df(x) \\). We can do this by using the super efficient, but apparently not super mathematically rigorous since mathematicians keep complaining about it, differentiate and treating it like a fraction method:

<div class=eqn> \[ \frac{df(x)}{dx} = 2x \] </div>\[ \downarrow \]
<div class=eqn> \[ df(x) = 2x \; dx\] </div>

This is great for functions which only depend one one variable, such as our \\( f(x) \\), but when we have multiple variable functions, it's a bit more complicated. The infinitely small change in \\( f(x,y) \\) would depend on both \\( dx \\) and \\( dy \\). 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ df = \left(\frac{\partial f}{\partial x}\right)dx +  \left(\frac{\partial f}{\partial y}\right)dy \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: The Total differential 
        </div><div class="formula-tooltip-desc">
            The total differential of a function measures the small change in the function caused by small changes in all of its variables at once.
        </div></span>
    </div>
</div>

### Exact & Inexact Differentials

Take a total differential like this: 

<div class=eqn> \[ df = x \; dy + y \; dx  \] </div>

By comparing this to formula 1, we can see that the \\( x \\) is supposed to be the \\( \\frac{\\partial f}{\\partial x} \\), and the \\( y \\) is supposed to be the \\( \\frac{\\partial f}{\\partial y} \\). 

If we then integrate both of these to get back \\( f \\), we'll get \\( xy + c \\), no matter which side we choose to integrate. Therefore we know that, for this equation, \\( f(x,y) = xy + c \\). Since we were able to find a solution, this total differential is called an *exact differential*.

But we aren't always so lucky: 

<div class=eqn> \[ df = x \; dy - y \; dx  \] </div>

Now integrating \\( x \\; dy \\) gives us \\( xy + c \\), but integratingn\\( -y \\; dx \\) gives us \\( -xy + c \\). In other words, there is no function \\( f(x,y) \\) which we can magic up which would fit the total differential. That means this differential is *inexact*.

#### How to test for inexact differentials

So I've given the definition of an inexact differential, implying that it's a total differential where no \\( f(x,y) \\) would actually work. The example used was quite simple, to make it clear that there would be no working function. But you won't always be able to just see it. Therefore we need a method.

Let's call back our partial differential equation:

<div class=eqn> \[ df = \left(\frac{\partial f}{\partial x}\right)dx +  \left(\frac{\partial f}{\partial y}\right)dy \] </div>

Our total differential includes two partial derivatives. Let's give 'em some new names:

<div class=eqn> \[ A = \frac{\partial f}{\partial x}, \quad  B = \frac{\partial f}{\partial y} \] </div> \[ \downarrow \]
<div class=eqn> \[ df = A \; dx +  B \; dy \] </div>

That will make looking at our equation a bit less unbearable. Then to check if the equation is exact, you just partially differentiate each one with a different variable. More clearly, since \\( A \\) is \\(f(x,y) \\) partially differentiated with respect to \\(x\\), partially differentiate \\( A \\) itself with respect to \\( y\\). Then since \\( B \\) is \\(f(x,y) \\) partially differentiated with respect to \\(y\\), partially differentiate \\( B \\) itself with respect to \\( x \\).

Why are we differentiating our differentials? Well, look at what we now have:

<div class=eqn> \[ \frac{\partial A}{\partial y} = \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial x} \right) , \quad  \frac{\partial B}{\partial x} = \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial y} \right) \] </div> 

We established earlier that the order in which you partially differentiate doesn't change the result. So differentiating it with respect to \\(x\\) first and then with respect to \\(y\\) second (\\( \\frac{\\partial A}{\\partial y}\\)) is no different to differentiating it with respect to \\(y\\) first and then with respect to \\(x\\) second (\\( \\frac{\\partial B}{\\partial x}\\)).

That means we should be able to equate the two, like so:

<div class=eqn> \[ \frac{\partial A}{\partial y} = \frac{\partial B}{\partial x} \] </div> 

And this is the definition of an exact differential. If this relation holds, then we know that it is an exact differential. If not, it's an inexact differential.

### The Chain Rule

Take this wiggly path here, called \\( S \\). We want to get to point \\( P \\) by taking a bunch of very little steps, \\( dS \\). 

How does our height \\( h(x,y) \\) change with each little step \\( dS \\)?

Look at that, we have one function depending on two variables, that means if we want to know how much each step takes, we must use our total differential:

<div class=eqn> \[ dh = \left(\frac{\partial h}{\partial x}\right)dx +  \left(\frac{\partial h}{\partial y}\right)dy \] </div> 

Our general movement depends on both how our \\(x\\)-position changes along \\(S\\) <span class="formula-emph">[\\( \\mathbf{\\frac{ dx }{ dS }} \\)]</span> and how our \\(y\\)-position changes along \\(S\\) <span class="formula-emph">[\\( \\mathbf{\\frac{ dy }{ dS }} \\)]</span>. So to incorporate those two variables into our total differential, we just make use of the fact that they look like fractions, and so we will treat them like fractions.

Instead of just \\( dx \\), we'll write \\( \\frac{ dx }{ dS } \\; dS \\), and instead of just \\( dy \\), we'll write \\( \\frac{ dy }{ dS } \\; dS \\). That now gives us:

<div class=eqn> \[ dh = \left(\frac{\partial h}{\partial x}\right)\frac{ dx }{ dS } \; dS +  \left(\frac{\partial h}{\partial y}\right)\frac{ dy }{ dS } \; dS  \] </div> 

Finally, we divide both sides by \\( dS \\) and we end up with:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dh}{dS} = \frac{\partial h}{\partial x} \cdot \frac{ dx }{ dS } + \frac{\partial h}{\partial y} \cdot \frac{ dy }{ dS } \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: The Chain Rule
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Polar co-ordinates

#### Cartesian Coordinates

Cartesian co-ordinates are the ones you have been using all this while, with \\(x\\), \\(y\\) and \\(z\\). Polar co-ordinates are more convenient for systems which have circular symmetry. Instead of just stating how  far along the <em>x</em> or <em>y</em> axis a point is, we can describe a point by its distance from the origin  and the angle that it makes with the positive <em>x</em>-axis. That means instead of the \\((x,y)\\) we all know and love, we now use \\((r, \\theta)\\)</p> 

If you remember from last time, we used trigonometry to learn how we can switch between these

<div class="hover-wrapper">
    <div class="formula-container">
    <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
        <p>\( x = r\cos{\theta}, \quad y = r\sin{\theta} \)</p>
    </div>
    <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula 3a: Cartesian to Polar Transformations
    </div><div class="formula-tooltip-desc">
        You can switch from cartesian co-ordinates (x, y) to polar co-ordinates (r, θ) using these transformations.
    </div></span>
    </div>
</div>

<p>And now converting cartesian to polar:</p>

<div class="hover-wrapper">
    <div class="formula-container">
    <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
        \[ r = \sqrt{x^2 + y^2}, \quad \theta = \tan^{-1}{\frac{y}{x}} \]
    </div>
    <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula 3b: Polar to Cartesian Transformations
    </div><div class="formula-tooltip-desc">
        You can likewise change from polar co-ordinates (r, θ) to cartesian co-ordinates (x, y) using these transformations.
    </div></span>
    </div>
</div>

This means we can change a cartesian function \\( f(x, y) \\) into a polar function \\( g(r, \\theta) \\). Since our newfound \\( g(r, \\theta) \\) is a two-variable function which is related to \\( f(x, y) \\), we can use the chain rule we just obtained to calculate how \\( g(r, \\theta) \\) changes with angle <span class="formula-emph">\\( \\left[\\mathbf{\\frac{ dg }{ d\\theta }} \\right]\\)</span> and how \\( g(r, \\theta) \\) changes with distance <span class="formula-emph">\\( \\left[\\mathbf{\\frac{ dg }{ dr }} \\right]\\)</span>

<div class=eqn> \[ \frac{dg}{dr} = \frac{\partial f}{\partial x} \cdot \frac{ dx }{ dr } + \frac{\partial f}{\partial y} \cdot \frac{ dy }{ dr } \] \[ \frac{dg}{d\theta} = \frac{\partial f}{\partial x} \cdot \frac{ dx }{ d\theta } + \frac{\partial f}{\partial y} \cdot \frac{ dy }{ d\theta } \] </div> 

By using the transformations in the orange boundaries (formulae 3a and 3b), we can actually calculate some of these values.

<div class=eqn> \[ \frac{\partial x}{\partial r} = \cos \theta \; ; \quad \frac{\partial x}{\partial \theta} = - r \sin \theta \] \[ \frac{\partial y}{\partial r} = \sin \theta \; ; \quad \frac{\partial y}{\partial \theta} = r \cos \theta \] </div> 

Then we put those back in.

<div class=eqn> \[ \frac{\partial g}{\partial r} = \cos \theta \frac{\partial f}{\partial x} + \sin \theta \frac{\partial f}{\partial y} \] \[ \frac{\partial g}{\partial \theta} = - r \sin \theta \frac{\partial f}{\partial x} + r \cos \theta \frac{\partial f}{\partial y} \] </div> 

And just for generality, we can think of these as operators:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \begin{align*} \frac{\partial}{\partial r} &= \cos \theta \frac{\partial}{\partial x} + \sin \theta \frac{\partial}{\partial y} \\[6pt] \frac{\partial}{\partial \theta} &= - r \sin \theta \frac{\partial}{\partial x} + r \cos \theta \frac{\partial}{\partial y} \end{align*} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4: 
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

We can do the same for x and y

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \begin{align*}
            \frac{\partial}{\partial x} &= \cos \theta \frac{\partial}{\partial r} - \frac{1}{r} \sin \theta \frac{\partial}{\partial \theta} \\[10pt]
            \frac{\partial}{\partial y} &= \sin \theta \frac{\partial}{\partial r} + \frac{1}{r} \cos \theta \frac{\partial}{\partial \theta}
            \end{align*}
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 5: 
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>


### Directional derivatives

The *grad function* calculates the direction of steepest ascent or descent at a certain point:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{\nabla}\phi = \hat{i}\left(\frac{\partial \phi}{\partial x}\right) + \hat{j}\left(\frac{\partial \phi}{\partial y}\right) + \hat{k}\left(\frac{\partial \phi}{\partial z}\right)\]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 6: The Grad Operator
        </div><div class="formula-tooltip-desc">
            The grad operator gives the maximum gradient vector at any point.
        </div></span>
    </div>
</div>

However, we won't always want the maximum. Say we are going in the direction \\( \\vec{u} \\).

A *directional derivative* tells us exactly this. If you remember, the dot product tells us how neatly one vector lines up with another vector. So by taking our gradient <span class="formula-emph">\\( \\left[\\mathbf{\\vec{\\nabla}\\phi} \\right]\\) </span> and dotting that with our vector <span class="formula-emph">\\( \\left[\\mathbf{ \\vec{u} } \\right]\\)</span>, we get exactly that.

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \text{Directional derivative} \equiv \vec{\nabla}\phi \cdot \vec{u} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 7: The Directional derivative
        </div><div class="formula-tooltip-desc">
            The grad operator gives the maximum gradient vector at any point.
        </div></span>
    </div>
</div>


### Grad squared (the Laplacian)

ICL, I don't know why this gets its own name, it's literally just the grad, except using second derivatives. Classic case of scientists colonising redundancies just to put their name on something.

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \nabla^2 f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} + \frac{\partial^2 f}{\partial z^2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 8a: The Laplacian
        </div><div class="formula-tooltip-desc">
            The grad operator gives the maximum gradient vector at any point.
        </div></span>
    </div>
</div>

We can use this on something like the Schrodinger equation or the wave equation, because they had second derivatives if you remember:

<div class=eqn> \[ -\frac{\hbar^2}{2m} \nabla^2 \phi + V \phi = E \phi  \] </div>

<div class=eqn> \[ \nabla^2 \vec{E} = \frac1{c^2} \frac{\partial^2 \vec{E}}{dt^2}  \] </div>

We can also use this in polar co-ordinates

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \begin{align}
                \nabla^2 &= \left( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} \right) \\[6pt] &= \frac{\partial^2}{\partial r^2} + \frac{1}{r} \frac{\partial}{\partial r} + \frac{1}{r^2} \frac{\partial^2}{\partial \theta^2}
            \end{align} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 8b: The Laplacian <br><div style="font-size: 3vh; line-height: 1.7">(Polar Coordinates)</div>
        </div><div class="formula-tooltip-desc">
            The grad operator gives the maximum gradient vector at any point.
        </div></span>
    </div>
</div>

And spherical:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box large-eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \begin{align}
                \nabla^2 = \frac{\partial^2}{\partial r^2} + \frac{2}{r} \frac{\partial}{\partial r} + \frac{1}{r^2} \frac{\partial^2}{\partial \theta^2} + \frac{\cos \theta}{r^2 \sin \theta} \frac{\partial}{\partial \theta} + \frac{1}{r^2 \sin^2 \theta} \frac{\partial^2}{\partial \varphi^2}
            \end{align} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 8c: The Laplacian <br><div style="font-size: 3vh; line-height: 1.7">(Spherical Coordinates)</div>
        </div><div class="formula-tooltip-desc">
            The grad operator gives the maximum gradient vector at any point.
        </div></span>
    </div>
</div>

### Lagrange Multipliers

We know that if we want to find the minimum or maximum points of a function, we just have to differentiate it and put it equal to zero. For a function with two variables, we do it with respect to each of its variables. So if we have \\( f(x, y) \\), we can find the maxima and minima:

<div class=eqn> \[ \frac{\partial f}{\partial x} = 0; \quad \frac{\partial f}{\partial y} = 0 \] </div>

Put those into the total derivative, and we get:

<div class=eqn> \[ df = \left(\frac{\partial f}{\partial x}\right)dx +  \left(\frac{\partial f}{\partial y}\right)dy = 0 \] </div>

So we know that maxima and minima take place when the total derivative is zero. 

But say, for whatever reason, we don't want to know the maximum and minimum of the whole function. 

What the bloody hell is that supposed to mean you wonder. Take a function like this, \\( f(x, y) = x^2 + y^2 \\). If we were to calculate the point at which the total derivative is 0, then we would get the coordinates for that big dip in the middle (i.e. \\( (0, 0) \\)), since that's the minimum (and in this case there is no 'maximum').

But let's take that graph and draw a line at the bottom. We'll call this line our *constraint*, \\( g(x, y)\\). Now I want to know what the minimum value of the function *on the line* is. It's no longer \\( (0, 0) \\), because the line doesn't go through there. And whilst we can kinda get a sense for where it is visually, we are very serious mathematicians, and we want to know the exact coordinates.

First, we will define what exactly our constraint \\( g(x, y)\\) is. In this case, our constraint is a straight line, of the form \\( y = 1 - x \\). That means \\( g(x, y) = x + y = 1 \\). Notice that our constraint function is actually a constant here. That's pretty important, because it means its total derivative is 0:

<div class=eqn> \[ dg = \left( \frac{\partial g}{\partial x} \right) dx + \left( \frac{\partial g}{\partial y} \right) dy = 0  \] </div>

Now I'm not gonna prove this, and you don't have to, but to get the minimum of \\( f(x, y)\\) on the constraint \\( g(x, y)\\), this relation must be true:

<div class=eqn> \[ d(f + \lambda g) = 0  \] </div>

Where \\( \\lambda \\) is some constant, called the *Lagrange multiplier*. And although I'm not going to prove it, i *will* try and explain it.

Anyway, by using the chain rule, we get this:

<div class=large-eqn> \[ d(f + \lambda g) = \left( \frac{\partial f}{\partial x} + \lambda \frac{\partial g}{\partial x} \right) dx + \left( \frac{\partial f}{\partial y} + \lambda \frac{\partial g}{\partial y} \right) dy = 0 \] </div>

Since \\(x\\) and \\(y\\) have got nothing to do with each other (in other words, they are *independant variables*), that means: 

<div class=eqn> \[  \frac{\partial f}{\partial x} + \lambda \frac{\partial g}{\partial x} = \frac{\partial f}{\partial y} + \lambda \frac{\partial g}{\partial y} = 0 \] </div>

That means we end up with 3 simultaneous equations, which we can use to uncover the identity of our Lagrange multiplier \\( \\lambda \\).

<div class=eqn> \[ \begin{align}
    \frac{\partial f}{\partial x} + \lambda \frac{\partial g}{\partial x} &= 0 \\[6pt]
    \frac{\partial f}{\partial y} + \lambda \frac{\partial g}{\partial y} &= 0 \\[6pt]
    g(x, y) &= \text{constant}
\end{align} \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box large-eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \begin{align}
                \nabla f + \lambda \nabla g &= 0 \\[6pt]
                g(x, y) &= \text{constant}
            \end{align} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 9: Calculating the Lagrange multiplier
        </div><div class="formula-tooltip-desc">
            The grad operator gives the maximum gradient vector at any point.
        </div></span>
    </div>
</div>
