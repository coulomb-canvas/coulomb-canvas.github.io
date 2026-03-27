---
subid: green
title: Green's Theorem
topic: maths2
---

Picture the scene. 

You then get to the festival, and it's absolute chaos. 

Now let's say you wanna know about how many people are in this setting

Of course you could count them, but that would be really flipping difficult.

Here's another case of mathematics going against our physical intuition. Usually if we want to know what takes place inside an area, you'd have to... look into the area.

### Green's theorem

I'll show it you, and then we'll work through how to get it together.

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \oint_C ( P \; dx + Q \; dy ) = \iint_R \left( \frac{ \partial Q }{ \partial x } - \frac{ \partial P }{ \partial y } \right) \; dA \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Green's theorem
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

We will consider a vector field. Meet our new friend, \\( \\vec{F} \\):

<div class=eqn> \[ \vec{F} = P(x, y) \hat{i} + Q(x, y) \hat{j} \] </div>

Remember, our region is called \\( R \\), and it is bounded by the fence \\( C \\). We are walking alongside the fence \\( C \\), and for each teeny tiny step we take along it <span class="formula-emph">\\( \\left[\\mathbf{ d\\vec{r} } \\right]\\)</span>, we determine the force *only on the barrier*.

Then you ask yourself the question: how much is this force actually helping me move along \\( C \\)? Is it pushing me along, pushing me back, or neither?

If the force points in the same direction as my movement, then it's helping me along. Thank you so much Mr Vector field! As a reward, here's 5 points! So at this particular co-ordinate, we've given a *positive* value. The more the force aligns with my motion, the more the force is actually helping me along, and therefore the more points we give it.

By comparison, if the force points in the opposite direction as my movement, then it's holding me back, which is really annoying. What's that about, mate? As a punishment, I'll deduct 3 points. At *this* co-ordinate, we've given the path a *negative* value. And once again, the more the force aligns with my motion in the opposite direction, the more it's hindering me, and therefore the more points we deduct.

And if the force points perpendicular to my motion, then it's neither helping me, nor hindering me. It's just a bit annoying. So no points for you.

I wonder, which operator tells us how aligned two vectors are? Something which is a maximum when they are parallel and zero when perpendicular?

That's right! The *dot product*! So to determine how many points each part of our surface gets, we dot the force with our tiny step <span class="formula-emph">\\( \\left[\\mathbf{ \\vec{F} \\cdot d\\vec{r} } \\right]\\)</span>

<div class=eqn> \[ \begin{align} \int_A^B \vec{F} \cdot d\vec{r} &= \int_A^B ( P\hat{i} + Q\hat{j} ) \cdot (dx \hat{i} + dy \hat{j} ) \\[6pt] &= \int_A^B ( P \; dx + Q \; dy ) \end{align} \] </div>

We keep doing this all the way around \\( C \\), adding up the total points along the *closed path*, hence the closed integral

<div class=eqn> \[ \oint_C \vec{F} \cdot d\vec{r} = \oint_C ( P \; dx + Q \; dy ) \] </div>

So that explains the first half of the equation, now what about the second half? Remember we are trying to find out how much the stuff inside \\( R \\) rotates. Do you remember from last time, which operator tells us how much a single element makes an object rotate?

That's right, the curl! So we want the curl of the forces <span class="formula-emph">\\( \\left[\\mathbf{ \\nabla \\times \\vec{F} } \\right]\\)</span>, and then we want to add up all the individual curls to get the total, hence the double integral.

Now given our definition for \\( \\vec{F} \\) <span class="formula-emph">\\( \\left[\\mathbf{ \vec{F} = P\hat{i} + Q\hat{j} + 0\hat{k} } \\right]\\)</span>, we can calculate the curl very easily:


<div class=eqn> \[ \begin{align} \text{curl } \vec{F} &= \vec{\nabla} \times \vec{F} \\[6pt] 
    &= \begin{vmatrix} \vec{\hat{i}} & \vec{\hat{j}} & \vec{\hat{k}} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & 0 \end{vmatrix} \\[6pt]
    &= \left(0 - \frac{\partial Q}{\partial z}\right) \hat{i} - \left(0 - \frac{\partial P}{\partial z}\right) \hat{j} + \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) \hat{k} \end{align}\] </div>

Since \\( P(x, y) \\) and \\( Q(x, y) \\) don't depend on \\(z\\) at all, the partial derivatives with respect to \\(z\\) just become zero, meaning the first two terms are zeros, leaving us with:

<div class=eqn> \[ \vec{\nabla} \times \vec{F} = \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) \hat{k} \] </div>

Of course we don't just want one individual curl; we want the curl of every single teeny tiny element, for every teeny tiny step in \\(x\\) <span class="formula-emph">\\( \\left[\\mathbf{ dx } \\right]\\)</span> and every teeny tiny step in \\(y\\) <span class="formula-emph">\\( \\left[\\mathbf{ dy } \\right]\\)</span>. To do that we integrate again:

<div class=eqn> \[ \iint \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dA \] </div>

*We replaced \\( dx \\; dy \\) with \\( dA \\), but it's the same thing.*

And just like that we have the other side of the equation!!

### Using Green's theorem

Now when the bloody hell will we ever need to be able to ...

Focus on the right hand side of the equation. We know that we are integrating the curl with respect to the area. But what happens if we set that curl term to just be one?

<div class=eqn> \[ \iint \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dA = \iint 1 dA = \text{The Area Enclosed} \] </div>

Hey, that's cool! If we somehow manage to make that middle term zero, then we are able to calculate the area enclosed by \\( C \\), simply from ...

There are quite a few different different ways we can make this happen:

#### Option 1: *P=0, Q=x*

Using the full equation:

<div class=eqn> \[ \oint_C ( P \; dx + Q \; dy ) = \iint_R \left( \frac{ \partial Q }{ \partial x } - \frac{ \partial P }{ \partial y } \right) \; dA \] </div> \[ \downarrow \]

<div class=eqn> \[ \oint_C ( \style{opacity: 0.3}{\cancel{0 \; dx +}} x \; dy ) = \iint_R 1  \; dA \] </div>

#### Option 2: *P=-y, Q=0*

#### Option 3: *P=-y, Q=x*

### Stoke's theorem

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \oint_C \vec{F} \cdot d\vec{r} = \iint_R ( \vec{\nabla} \times \vec{F}) \cdot dA \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Stoke's theorem
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>
