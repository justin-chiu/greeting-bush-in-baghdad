// Content for highlight notes: identifiers, text content, sources, and source URLs
const notesData = [
    {
        "note-id": "note-press-conf",
        "text": "On December 14, 2008, U.S. President George W. Bush held a joint press conference with Iraqi Prime Minister Nouri al-Maliki in Baghdad to sign an agreement solidifying U.S.-Iraq relations. Nearing the end of his second term as President, Bush was on his last visit to Iraq, six years after he ordered the U.S. invasion of Iraq that started the Iraq War.",
        "source-1": "Farzan, A. N. (2018). 10 years ago, an Iraqi journalist threw his shoes at George W. Bush and instantly became a cult figure. <i>The Washington Post</i>.",
        "source-1-url": "https://www.washingtonpost.com/nation/2018/12/14/years-ago-an-iraqi-journalist-threw-his-shoes-george-w-bush-instantly-became-cult-figure/"
    },
    {
        "note-id": "note-poet-krieger",
        "text": "David Krieger is an author, editor, and president emeritus of the Nuclear Age Peace Foundation. He has written and edited many books on peace and nuclear warfare.",
        "source-1": "About David Krieger. (n.d.). <i>Nuclear Age Peace Foundation</i>. Retrieved January 30, 2022.",
        "source-1-url": "https://www.wagingpeace.org/author/david-krieger/"
    },
    {
        "note-id": "note-al-zaidi",
        "text": "Muntadhar al-Zaidi is an Iraqi journalist who has worked for several Middle-Eastern TV networks. He endured a kidnapping, two arrests by the U.S. Armed Forces, and a nine-month prison sentence for an incident at a press conference.",
        "source-1": "Muntadhar al-Zaidi. (n.d.). <i>Wikipedia</i>. Retrieved January 30, 2022.",
        "source-1-url": "https://en.wikipedia.org/wiki/Muntadhar_al-Zaidi"
    },
    {
        "note-id": "note-visits-iraq",
        "text": "During his presidency, Bush made four surprise visits to Iraq. For security reasons, these trips were planned in secrecy and executed with extraordinary precautions. On his final December 2008 stopover in Baghdad, Bush held a press conference with Prime Minister Maliki at the Prime MInister's Palace and met with Iraqi President Jalal Talabani at the Salam Palace.",
        "source-1": "Knoller, M. (2009). \r\nBackground: Bush's Surprise Visits To Iraq, Afghanistan. <i>CBS News</i>.",
        "source-1-url": "https://www.cbsnews.com/news/background-bushs-surprise-visits-to-iraq-afghanistan/",
        "source-2": "Presidential news and speeches. (2008). <i>The White House: President George W. Bush</i>.",
        "source-2-url": "https://georgewbush-whitehouse.archives.gov/news/releases/2008/12/"
    },
    {
        "note-id": "note-bush-remarks",
        "text": "In his joint press conference with Prime Minister Maliki, President Bush defended the protraction of the conflict in Iraq as necessary to defeat insurgents, quell violence, and restore peace, praising U.S. troops and coalition forces for their sacrifices.",
        "source-1": "Office of the Press Secretary (2008). President Bush and Iraq Prime Minister Maliki Sign the Strategic Framework Agreement and Security Agreement. <i>The White House: President George W. Bush</i>.",
        "source-1-url": "https://georgewbush-whitehouse.archives.gov/news/releases/2008/12/20081214-2.html"
    },
    {
        "note-id": "note-air-strikes",
        "text": "From 2003 to 2008, an estimated 5,300 Iraqi civilians were killed by U.S. coalition air strikes. In the initial invasion alone, there were more than 2,300 civilian deaths, according to estimates.",
        "source-1": "Documented civilian deaths from violence (2003-2017). <i>Iraq Body Count</i>.",
        "source-1-url": "https://www.iraqbodycount.org/database/"
    },
    {
        "note-id": "note-abu-ghraib",
        "text": "After capturing the Abu Ghraib prison during the 2003 invasion of Iraq, U.S. forces repurposed the prison to detain criminals and suspected terrorists. In 2004, an investigation into the prison uncovered widespread physical, emotional, and sexual abuse perpetrated by U.S. soldiers against Iraqi civilians, many who had not been formally charged.",
        "source-1": "Abu Ghraib (2022). <i>The Columbia Encyclopedia, 6th ed</i>.",
        "source-1-url": "https://www.encyclopedia.com/reference/encyclopedias-almanacs-transcripts-and-maps/abu-ghraib",
        "source-2": "Hilal, M. (2017). Abu Ghraib: The legacy of torture in the war on terror. <i>Al Jazeera</i>.",
        "source-2-url": "https://www.aljazeera.com/opinions/2017/10/1/abu-ghraib-the-legacy-of-torture-in-the-war-on-terror"
    },
    {
        "note-id": "note-marshal",
        "text": "A reference to the story of deputy U.S. marshal Virgil Earp and his brothers, police officers Wyatt and Morgan Earp. They are famous for gunning down three outlaw cowboys at a stable while stationed in Tombstone, Arizona, a frontier mining town facing a silver rush in the 1880s. Following the shootout, Cochise County sheriff John Behan charged the Earps with murder, but all three were eventually acquitted. The incident spawned a book and countless movies, including the 1939 western <i>Frontier Marshal</i>.",
        "source-1": "Shootout at the O.K. Corral. (2021). <i>History</i>.",
        "source-1-url": "https://www.history.com/this-day-in-history/shootout-at-the-ok-corral",
        "source-2": "Gunfight at the O.K. Corral. (n.d.). <i>Wikipedia</i>. Retrieved January 30, 2022.",
        "source-2-url": "https://en.wikipedia.org/wiki/Gunfight_at_the_O.K._Corral"
    },
    {
        "note-id": "note-torture",
        "text": "Although President Bush promised publicly in the aftermath of 9/11 that captured terrorists would be treated humanely, the U.S. government condoned the use of \"enhanced interrogation techniques\" on Taliban and Al Qaeda prisoners held at Guantanamo Bay, Cuba. These techniques were adapted for use at Abu Ghraib, and including severely depriving prisoners of sleep, and forcing prisoners into uncomfortable \"stress positions.\"",
        "source-1": "Abu Ghraib (2022). <i>The Columbia Encyclopedia, 6th ed</i>.",
        "source-1-url": "https://www.encyclopedia.com/reference/encyclopedias-almanacs-transcripts-and-maps/abu-ghraib",
        "source-2": "It was torture': an Abu Ghraib interrogator acknowledges 'horrible mistakes.' (2016). <i>NPR</i>.",
        "source-2-url": "https://www.npr.org/sections/parallels/2016/04/04/472964974/it-was-torture-an-abu-ghraib-interrogator-acknowledges-horrible-mistakes"
    },
    {
        "note-id": "note-water-torture",
        "text": "Refers to a method of torture called \"water curing\", in which water is poured directly down a victim's throat and into their stomach.",
        "source-1": "Candanedo, j. (2014). Top 10 ways to torture someone with water. TopTenz. ",
        "source-1-url": "https://www.toptenz.net/top-10-ways-to-torture-someone-with-water.php"
    },
    {
        "note-id": "note-treatment",
        "text": "Video and photographic evidence showed many detainees in the U.S.-occupied Abu Ghraib prison being forced by soldiers with guard dogs to endure violent, perverse, humiliating treatment, often while naked.",
        "source-1": "Abu Ghraib (2022). <i>The Columbia Encyclopedia, 6th ed</i>.",
        "source-1-url": "https://www.encyclopedia.com/reference/encyclopedias-almanacs-transcripts-and-maps/abu-ghraib",
        "source-2": "Hilal, M. (2017). Abu Ghraib: The legacy of torture in the war on terror. <i>Al Jazeera</i>.",
        "source-2-url": "https://www.aljazeera.com/opinions/2017/10/1/abu-ghraib-the-legacy-of-torture-in-the-war-on-terror"
    },
    {
        "note-id": "note-civilian-deaths",
        "text": "In total, from 2003 to 2008 there were 106,396 documented civilian deaths due to the conflict. Perpetrators include the U.S. coalition forces, Iraqi state forces, and anti-government/anti-occupation forces.",
        "source-1": "Documented civilian deaths from violence (2003-2017). <i>Iraq Body Count</i>.",
        "source-1-url": "https://www.iraqbodycount.org/database/"
    },
    {
        "note-id": "note-shoe-incident",
        "text": "As President Bush was speaking at his December 14, 2008 press conference with Prime Minister Maliki in Baghdad, he was interrupted by Iraqi journalist Muntadhar al-Zaidi throwing his shoes, on at a time, towards the podium. Bush dodged both shoes (one of which hit an American flag) and appeared unbothered, joking that the shoe was \"size 10\" and downplaying the stunt as an isolated incident. Zaidi was dragged out of the room by security and arrested, eventually sentenced to  three years in prison for assaulting a foreign head-of-state. He was released after nine months, testifying that he was tortured by government personnel.",
        "source-1": "Farzan, A. N. (2018). 10 years ago, an Iraqi journalist threw his shoes at George W. Bush and instantly became a cult figure. <i>The Washington Post</i>.",
        "source-1-url": "https://www.washingtonpost.com/nation/2018/12/14/years-ago-an-iraqi-journalist-threw-his-shoes-george-w-bush-instantly-became-cult-figure/"
    },
    {
        "note-id": "note-shoe-hero",
        "text": "In the aftermath of the shoe-throwing incident, reporter Muntadhar al-Zaidi's actions were denounced by the Iraqi government. However, he was regarded as a hero by civilians throughout the Middle East and beyond, receiving multiple proposals for marriage. Although his footwear was destroyed by U.S. officials upon inspection, it became a symbol of dissent and an object of fascination. A sculptor created a supersized replica of his shoe and mounted it on a pedestal in an orphanage. Shoemakers fighting to claim credit for making his Oxfords faced backlogs of orders for replicas, as others offered to buy the originals at exorbitant prices. The incident inspired countless shoe-related demonstrations, jokes, and even video games. Later, Zaidi himself was the target of a thrown shoe from an Iraqi man accusing him of supporting dictatorship at a 2009 press conference in Paris.",
        "source-1": "Farzan, A. N. (2018). 10 years ago, an Iraqi journalist threw his shoes at George W. Bush and instantly became a cult figure. <i>The Washington Post</i>.",
        "source-1-url": "https://www.washingtonpost.com/nation/2018/12/14/years-ago-an-iraqi-journalist-threw-his-shoes-george-w-bush-instantly-became-cult-figure/"
    }
]