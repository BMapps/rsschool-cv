# Mykhailo Bezditnyi

### Contact Info:

- E-mail: mihael.09k@gmail.com 
- cell: +380938847279 
 
 ### Summary/Soft skills

 I'm working as industrial engineer for Jabil Ukraine about 2 years. I'm very persistent, fast-learning  and can easily join the team. I'm skilled in prioritizing and managing multiple tasks simultaneously on everyday work and all these skills were already demonstrated and improved on my current work. 
 
 ### Hard skills

 Self-experience in Java Core. Some knowledges in VBA in Excel(used for ease my everyday tasks within my current work), and HTML/CSS.
 ###### Version control: GitHub(low level)
 ###### Tools: Intellij IDEA, Eclipse, Visual Studio Code


 ### CodeExamples:

 ##### Java
 ``` 
 // part of realisation of LoveTriangles
 //recursed method
    static int nextLover(Integer[] array, int firstLover, int nextLover) {

        int x = array[nextLover]; //save next-next lover
        array[nextLover] = -1;    // set next-Lover -1 to prevent double count

        //step into( to next-next lover
        if (x != firstLover) {
            if (x>-1)
                return nextLover(array, firstLover, x)+1;
            else
                return 2;
        }
        return 1;
    }
```

   

 
