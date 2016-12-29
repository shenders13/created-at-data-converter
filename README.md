# created-at-data-converter

You want to see how your users have grown over time. The best way to represent is like:

<p align="center">
  <br />
  <img src="https://candicelaw.files.wordpress.com/2012/02/facebook-user-growth-july-2011-630w.jpg"/>
</p>

You need to convert your user data (that has a created_at field) into:

- regularly spaced time intervals going from the smallest created_at value to the largest created_at value. This will be your x-axis data.
- a cumulative frequency data set that counts how many users were present at a given point in time.

That is what the created-at-data-converter function does.
