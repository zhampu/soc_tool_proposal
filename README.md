
# Station of Commons proposals tool
A website template for passing Markdown to Html and having the footnotes as  side notes
example: http://juangomez.co/hybridpublicspaces/

This website and *Kids-Manif* where made as part of Master Project class in [Digital Media Bremen](http://digitalmedia-bremen.de/)

This is on the non finished version using [Paged.js](https://gitlab.pagedmedia.org/tools/pagedjs)
This is based on an example made by Julie Blanc for a [workshop](https://gitlab.pagedmedia.org/JulieBlanc/workshop-template)

Big thanks to her!

# How it works?
The whole thesis was writen using Markdown syntax which is very easy to edit using [Hackmd](https://hackmd.io/) or [Stackedit](https://stackedit.io/)

The file Thesis.md file is changed to HTML thanks to [Markdownit](https://github.com/markdown-it/markdown-it#usage-examples).
The Footnotes of the file are also parsed with [Footnotes plugin](https://github.com/markdown-it/markdown-it-footnote)
The Main.js then changes the Footnotes into Side notes and places them in the correct position for the website version.

# Install

```
npm install

npm run dev:css
```

and copy all the dist folder to your server

Note: you might have to change the your @fontface and the path to your CSS  and JS file before puting them in your server.

# Change the content

The Thesis.md file is the content of my thesis but change it to your own Markdown to test the layout.

# Table of content

Every H1 title will generate the TOC entry
ex:
```
# first title

# Second title
```
# Footnote to Side notes

Pandoc templating always put the references as footnotes.

The advantage ot this template is that it will take all the foot notes like this:

# Edit Thesis in HackMd

https://hackmd.io/c/tutorials/%2Fs%2Flink-with-github

Here's a simple footnote,[^1]

[^1]: This is the first footnote.

[Markdown Syntax](https://www.markdownguide.org/extended-syntax/)

and transform them in side notes that will match the position of the reference in the scroll of the text.

![image_caption](dist/images/Footnote_example.png)
*Footnote Example*
# To-Do
- [ ] Host a CodiMd set the document lenght to 1500000 [link](https://hackmd.io/c/codimd-documentation/%2Fs%2Fcodimd-configuration)
- [ ] Create 3 templates (Right sidenotes, end notes and left side notes)
- [x] Make the Print.css for HTML2PRINT this allows you to print your thesis in your browser without passing through Word or Indesign ( this version uses Paged.js)
- [x] Make a table of content
- [x] Add extra page for interviews, graphs , etc

# Acknowlednment

thanks to [Nicolas](https://github.com/azertypow) for his help!
And to [Julie Blanc](https://julie-blanc.fr/), Julien Taquet and the team of Paged.js!

