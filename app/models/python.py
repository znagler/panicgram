WORDLIST_FILENAME = "dictionary5.txt"
import string
import random
import time
import subprocess

def createdic(sequence):
    freq = {}
    for x in sequence:
        freq[x] = freq.get(x,0) + 1
    return freq




def load_words():

    inFile = open(WORDLIST_FILENAME, 'r')
    wordlist = []
    for line in inFile:
        wordlist.append(line.strip().lower())
    return wordlist
wordlist = load_words()

def locate(x, y):
    if y not in x:
        return []
    locations = []
    length=len(x)
    for n in range (0, length):
        if x[n]==y:
            locations+=(n,)
    return locations

def createstring(length):
    string = ""
    for n in range (0,length):
        if (n-1)%3==1:
            string += (random.choice("bbccddddffggghhjkllllmmnnnnnnpprrrrrrssssttttttvwy"))
        elif (n-1)%3==2:
            string += (random.choice("bbccddddffggghhllllmmnnnnnnpprrrrrrsssstttttt"))
        else:
            string+=(random.choice("aaaaaaaaaeeeeeeeeeeeeiiiiiiiiioooooooouuuu"))
    return string
ostring=createstring(25)
olist=list(ostring)
jumps=0
a=False
b=False
c=False
start = time.time()
youwin= False
print ("".join(olist)[:5])
print (len(olist)-5), "left.  You have ", jumps, "jumps"
while len(olist)>5 and youwin == False:
    word=(raw_input("give a 5+ letter word: "))

    while len(word)<5 or (len(word)>4 and word not in wordlist):
        if youwin==True:
                break
        if len(word)>4 and word not in wordlist:
            print ("".join(olist)[:5])
            print (len(olist)-5), "left.  You have ", jumps, "jumps"
            word=(raw_input("Not a real word.  Try again: "))

        if word == "j":
            if youwin==True:
                break
            if jumps ==0:
                print ("No jumps.")
                print ("".join(olist)[:5])
                print (len(olist)-5), "left.  You have ", jumps, "jumps"
                word=(raw_input("give a 5+ letter word: "))
            else:
                jumps-=1
                olist=olist[1:]
                if len(olist)<6:
                    youwin= True
                    break
                print ("".join(olist)[:5])
                print (len(olist)-5), "left.  You have ", jumps, "jumps"
                word=(raw_input("give a 5+ letter word: "))
        if len(word)<5 and word !="j":
            print ("".join(olist)[:5])
            print (len(olist)-5), "left.  You have ", jumps, "jumps"
            word=(raw_input("Too short.  Try again: "))

    if youwin== True:
        break
    dicword= createdic(word)
    dicolist=createdic(olist[:5])
    listkeysdicolist= list(dicolist.keys())



    if (olist[0] in word) and (olist[1] in word) and (olist[2] in word) and (olist[3] in word) and  (olist[4] in word):
        a = True
        for i in listkeysdicolist:
            if dicolist[i]>dicword[i]:
                a = False
                break


    if (olist[0] in word) and (olist[1] in word) and (olist[2] in word):
        list1=locate(word, olist[0])
        list2=locate(word, olist[1])
        list3=locate(word, olist[2])
        for n in list2:
            if list1[0]<n and list3[-1]>n:
                b= True
    if (str("".join(olist)[:2]) in word):
       c = True

    if a== True and b== False and c == False:
        olist=olist[5:]
        if len(olist)<6:
            youwin= True
            break
    if a == False and b == True and c == False:
        olist=olist[3:]
        if len(olist)<6:
            youwin= True
            break
    if a == False and b == False and c == True:
        olist=olist[2:]
        if len(olist)<6:
            youwin= True
            break
    if a== False and b == True and c == True:
        olist=olist[3:]
        if len(olist)<6:
            youwin= True
            break
        print ("you gained 1 jump!")
        jumps+=1
    if a== True and b == False and c == True:
        olist=olist[5:]
        if len(olist)<6:
            youwin= True
            break
        print ("you gained 2 jumps!")
        jumps+=2
    if a== True and b == True and c == False:
        olist=olist[5:]
        if len(olist)<6:
            youwin= True
            break
        print ("you gained 3 jumps!")
        jumps+=3
    if a== True and b == True and c == True:
        olist=olist[5:]
        if len(olist)<6:
            youwin= True
            break
        print ("you gained 5 jumps!")
        jumps+=5

    if youwin == True:
        break

    a= False
    b= False
    c = False
    print "".join(olist)[:5]
    print len(olist)-5, "left.  You have ", jumps, "jumps"
print ("You win!!!")
yourtime=float(time.time() - start)
print yourtime




myfile = open("/dm/oms/zack/random/game/newfile.txt", "a")
myfile.write(str( yourtime)+"\n")
myfile.close()

List = open("/dm/oms/zack/random/game/newfile.txt").readlines()


List2=[]
for i in List:
    List2.append(float(i.strip()))

print "Highscore: " + str(sorted(List2)[0])
