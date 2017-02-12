var changeWords = function (event) {
    'use strict';
    console.log("changeWords method called");
    var me = event.target;
    var wordPair = getRandomAdjective() + getRandomNoun();
    replaceText(wordPair, "wordPairPrint");
    if (me === wordPairButton){
        me.setAttribute("disabled", "disabled");
    setTimeout(function () { clearDisabled(me) }, 300);
    }    
}

function clearDisabled(button) {
    button.removeAttribute("disabled");
}

function replaceText(text, id){  
    var element = document.getElementById(id);
    element.textContent = text;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomAdjective (){
    var adjectiveList = ["abandoned ","abhorrent ","abiding ","abject ","ablaze ","able ","abnormal ","aboriginal ","abrasive ","abrupt ","absent-minded ","absorbing ","abstracted ","absurd ","abundant ","abusive ","accidental ","accurate ","acidic ","acoustic ","ad hoc ","adamant ","adaptable ","addicted ","adorable ","adventurous ","aggressive ","agonizing ","agreeable ","alcoholic ","alluring ","aloof ","amazing ","ambiguous ","ambitious ","amused ","amusing ","ancient ","angry ","animated ","annoyed ","annoying ","anxious ","apathetic ","aquatic ","aromatic ","arrogant ","ashamed ","aspiring ","assorted ","astonishing ","attractive ","auspicious ","automatic ","available ","average ","awesome ","awful ","axiomatic ","bad ","barbarous ","bashful ","bawdy ","beautiful ","belligerent ","bent ","berserk ","bewildered ","big ","billowy ","bite-sized ","bitter ","bizarre ","black ","black-and-white ","bloody ","blue ","blue-eyed ","blushing ","boiling ","boorish ","bored ","boring ","bouncy ","boundless ","brainy ","brash ","brave ","brawny ","breakable ","breezy ","brief ","bright ","bright ","broad ","broken ","brown ","bumpy ","burly ","bustling ","busy ","cagey ","calculating ","callous ","calm ","capable ","capricious ","careful ","careless ","caring ","cautious ","ceaseless ","certain ","charming ","cheap ","cheerful ","chemical ","chief ","childlike ","chilly ","chivalrous ","chubby ","chunky ","clammy ","classy ","clean ","clear ","clever ","cloistered ","cloudy ","closed ","clumsy ","cluttered ","coherent ","cold ","colorful ","colossal ","combative ","comfortable ","common ","complete ","complex ","concerned ","condemned ","confused ","conscious ","cooing ","cool ","cooperative ","coordinated ","courageous ","cowardly ","crabby ","craven ","crazy ","creepy ","crooked ","crowded ","cruel ","cuddly ","cultured ","cumbersome ","curious ","curly ","curved ","curvy ","cut ","cute ","cute ","cynical ","daffy ","daily ","damaged ","damaging ","damp ","dangerous ","dank ","dapper ","dark ","dashing ","dazzling ","dead ","deadpan ","deafening ","decisive ","decorous ","deep ","defeated ","defective ","defiant ","delicate ","delicious ","delightful ","demonic ","delirious ","dependent ","depressed ","deranged ","descriptive ","deserted ","detailed ","determined ","devilish ","didactic ","different ","difficult ","diligent ","direful ","dirty ","disagreeable ","disastrous ","discreet ","disgusted ","disgusting ","disillusioned ","dispensable ","distinct ","disturbed ","divergent ","dizzy ","domineering ","doubtful ","drab ","draconian ","dramatic ","dreary ","drunk ","dry ","dull ","dusty ","dusty ","dynamic ","dysfunctional ","eager ","early ","earsplitting ","earthy ","easy ","eatable ","economic ","educated ","efficacious ","efficient ","elastic ","elated ","elderly ","electric ","elegant ","elfin ","elite ","embarrassed ","eminent ","empty ","enchanted ","effervescent ","enchanting ","encouraging ","endurable ","energetic ","enormous ","entertaining ","enthusiastic ","envious ","equable ","equal ","erect ","erratic ","ethereal ","evanescent ","evasive ","even ","excellent ","excited ","exciting ","exclusive ","exotic ","expensive ","extra-large ","extra-small ","exuberant ","exultant ","fabulous ","faded ","faint ","fair ","faithful ","fallacious ","false ","familiar ","famous ","fanatical ","fancy ","fantastic ","far ","far-flung ","fascinated ","fast ","fat ","faulty ","fearful ","fearless ","feeble ","feigned ","female ","fertile ","festive ","fierce ","filthy ","fine ","finicky ","first ","fixed ","flagrant ","flaky ","flashy ","flat ","flatulent ", "flawless ","flimsy ","flippant ","flowery ","fluffy ","fluttering ","foamy ","foolish ","foregoing ","forgetful ","fortunate ","frail ","fragile ","frantic ","free ","freezing ","frequent ","fresh ","fretful ","friendly ","frightened ","frightening ","full ","fumbling ","functional ","funny ","funky ","funky fresh ","furry ","furtive ","future ","futuristic ","fuzzy ","gabby ","gainful ","gamy ","gaping ","garrulous ","gassy ","gaudy ","gay ","general ","gentle ","giant ","giddy ","gifted ","gigantic ","glamorous ","gleaming ","glib ","glistening ","glorious ","glossy ","godly ","good ","goofy ","gorgeous ","graceful ","grandiose ","grateful ","gratis ","gray ","greasy ","great ","greedy ","green ","grey ","grieving ","groovy ","grotesque ","grouchy ","grubby ","gruesome ","grumpy ","guarded ","guiltless ","gullible ","gusty ","guttural ","habitual ","half ","half-assed ","hallowed ","halting ","handsome ","handsomely ","handy ","hanging ","hapless ","happy ","hard ","hard-to-find ","harmonious ","harsh ","hateful ","heady ","healthy ","heartbreaking ","heavenly ","heavy ","hellish ","helpful ","helpless ","hesitant ","hideous ","high ","highfalutin ","high-pitched ","hilarious ","hissing ","historical ","holistic ","hollow ","homeless ","homely ","honorable ","horrible ","hospitable ","hot ","huge ","hulking ","humdrum ","humorous ","hungry ","hurried ","hurt ","hushed ","husky ","hypnotic ","hysterical ","icky ","icy ","idiotic ","ignorant ","ill ","illegal ","ill-fated ","ill-informed ","illustrious ","imaginary ","immense ","imminent ","impartial ","imperfect ","impolite ","important ","imported ","impossible ","incandescent ","incompetent ","inconclusive ","industrious ","incredible ","inexpensive ","infamous ","innate ","innocent ","inquisitive ","insidious ","instinctive ","intelligent ","interesting ","internal ","invincible ","irate ","irritating ","itchy ","jaded ","jagged ","jazzy ","jealous ","jittery ","jobless ","jolly ","joyous ","judicious ","juicy ","jumbled ","jumpy ","juvenile ","kaput ","keen ","kind ","kindhearted ","kindly ","knotty ","knowing ","knowledgeable ","known ","labored ","lackadaisical ","lacking ","lame ","lamentable ","languid ","large ","last ","late ","laughable ","lavish ","lazy ","lean ","learned ","left ","legal ","lethal ","level ","lewd ","light ","likeable ","limping ","literate ","little ","lively ","lively ","living ","lonely ","long ","longing ","long-term ","loose ","lopsided ","loud ","loutish ","lovely ","loving ","low ","lowly ","lucky ","ludicrous ","lumpy ","lush ","luxuriant ","lying ","lyrical ","macabre ","macho ","maddening ","madly ","magenta ","magical ","magnificent ","majestic ","makeshift ","male ","malicious ","mammoth ","maniacal ","many ","marked ","massive ","married ","marvelous ","material ","materialistic ","mature ","mean ","measly ","meaty ","medical ","meek ","mellow ","melodic ","melted ","merciful ","mere ","messy ","mighty ","military ","milky ","mindless ","miniature ","minor ","miscreant ","misty ","mixed ","moaning ","modern ","moldy ","momentous ","motionless ","mountainous ","muddled ","mundane ","murky ","mushy ","mute ","mysterious ","naive ","nappy ","narrow ","nasty ","natural ","naughty ","nauseating ","near ","neat ","nebulous ","necessary ","needless ","needy ","neighborly ","nervous ","new ","next ","nice ","nifty ","nimble ","nippy ","noiseless ","noisy ","nonchalant ","nondescript ","nonstop ","normal ","nostalgic ","nosy ","noxious ","null ","numberless ","numerous ","nutritious ","nutty ","oafish ","obedient ","obeisant ","obese ","obnoxious ","obscene ","obsequious ","observant ","obsolete ","obtainable ","oceanic ","odd ","offbeat ","old ","old-fashioned ","omniscient ","one ","onerous ","open ","opposite ","optimal ","orange ","ordinary ","organic ","ossified ","outgoing ","outrageous ","outstanding ","oval ","overconfident ","overjoyed ","overrated ","overt ","overwrought ","painful ","painstaking ","pale ","paltry ","panicky ","panoramic ","parallel ","parched ","parsimonious ","passive-agressive ","past ","pastoral ","pathetic ","peaceful ","penitent ","perfect ","periodic ","permissible ","perpetual ","petite ","petite ","phobic ","physical ","picayune ","pink ","piquant ","placid ","plain ","plant ","plastic ","plausible ","pleasant ","plucky ","pointless ","poised ","polite ","political ","poor ","possessive ","powerful ","precious ","premium ","present ","pretty ","previous ","pricey ","prickly ","private ","probable ","productive ","profuse ","protective ","proud ","psychedelic ","psychotic ","public ","puffy ","pumped ","puny ","purple ","purring ","pushy ","puzzled ","puzzling ","quack ","quaint ","quarrelsome ","questionable ","quick ","quickest ","quiet ","quirky ","quixotic ","quizzical ","rabid ","racial ","ragged ","rainy ","rambunctious ","rampant ","rapid ","rare ","raspy ","ratty ","ready ","real ","rebel ","receptive ","recondite ","red ","redundant ","reflective ","regular ","relieved ","remarkable ","reminiscent ","repulsive ","resolute ","resonant ","responsible ","rhetorical ","rich ","right ","righteous ","rightful ","rigid ","ripe ","ritzy ","roasted ","robust ","romantic ","roomy ","rotten ","rough ","round ","royal ","ruddy ","rude ","rural ","rustic ","ruthless ","sable ","sad ","safe ","salty ","sassy ","satisfying ","savory ","scandalous ","scarce ","scared ","scary ","scattered ","scientific ","scintillating ","scrawny ","screeching ","second ","second-hand ","secret ","secretive ","sedate ","seemly ","selective ","selfish ","separate ","serious ","shaggy ","shaky ","shallow ","sharp ","shiny ","shivering ","shocking ","short ","shrill ","shut ","shy ","sick ","silent ","silent ","silky ","silly ","simple ","simplistic ","sincere ","skillful ","skinny ","sleepy ","slim ","slimy ","slippery ","sloppy ","slow ","small ","smart ","smelly ","smiling ","smoggy ","smooth ","sneaky ","snobbish ","snotty ","soft ","soggy ","solid ","somber ","sophisticated ","sordid ","sore ","sore ","sour ","sparkling ","special ","spectacular ","spicy ","spiffy ","spiky ","spiritual ","spiteful ","splendid ","spooky ","spotless ","spotted ","spotty ","spurious ","squalid ","square ","squealing ","squeamish ","staking ","stale ","standing ","statuesque ","steadfast ","steady ","steep ","stereotyped ","sticky ","stiff ","stimulating ","stingy ","stormy ","straight ","strange ","striped ","strong ","stupendous ","stupid ","sturdy ","subdued ","subsequent ","substantial ","successful ","succinct ","sudden ","sulky ","super ","superb ","superficial ","supreme ","swanky ","sweet ","sweltering ","swift ","symptomatic ","synonymous ","taboo ","tacit ","tacky ","talented ","tall ","tame ","tan ","tangible ","tangy ","tart ","tasteful ","tasteless ","tasty ","tawdry ","tearful ","tedious ","teeny ","teeny-tiny ","telling ","temporary ","tender ","tense ","tense ","tenuous ","terrible ","terrific ","tested ","testy ","thankful ","therapeutic ","thick ","thin ","thinkable ","third ","thirsty ","thirsty ","thoughtful ","thoughtless ","threatening ","thundering ","tidy ","tight ","tightfisted ","tiny ","tired ","tiresome ","toothsome ","torpid ","tough ","towering ","tranquil ","trashy ","tremendous ","tricky ","trite ","troubled ","truculent ","true ","truthful ","typical ","ubiquitous ","ugliest ","ugly ","ultra ","unable ","unaccountable ","unadvised ","unarmed ","unbecoming ","unbiased ","uncovered ","understood ","undesirable ","unequal ","unequaled ","uneven ","unhealthy ","uninterested ","unique ","unkempt ","unknown ","unnatural ","unruly ","unsightly ","unsuitable ","untidy ","unused ","unusual ","unwieldy ","unwritten ","upbeat ","uppity ","upset ","uptight ","used ","useful ","useless ","utopian ","utter ","uttermost ","vacuous ","vagabond ","vague ","valuable ","various ","vast ","vengeful ","venomous ","verdant ","versed ","victorious ","vigorous ","violent ","violet ","vivacious ","voiceless ","volatile ","voracious ","vulgar ","wacky ","waggish ","waiting ","wakeful ","wandering ","wanting ","warlike ","warm ","wary ","wasteful ","watery ","weak ","wealthy ","weary ","well-groomed ","well-made ","well-off ","well-to-do ","wet ","whimsical ","whispering ","white ","whole ","wholesale ","wicked ","wide ","wide-eyed ","wiggly ","wild ","willing ","windy ","wiry ","wise ","wistful ","witty ","woebegone ","womanly ","wonderful ","wooden ","woozy ","workable ","worried ","worthless ","wrathful ","wretched ","wrong ","wry ", "hairless ","sadistic ","metal ","domesticated ","medicated ","cocky ","disrespectful ","impressive ","out of control ","internet worthy ","sexy ","very tactful ","bearded ","duck-like ","violent ","slimy ","insanely creepy ","embarrassing ","self-centered ","talking ","naked ","shaky ","deep ","zippy ","sticky ","fluffy ","frozen ","unholy ","painfully honest ","fighting ","bitchin\' ","frisky ","insane ","ungodly ","abusive ","drunken ","idiotic ","twisted ","yapping ","indecent ","godawful ","flirting ","high-end ","insecure ","maniacal ","sickened ","stubborn ","tripping ","sinister ","costumed ","haunting ","startled ","alcoholic ","demanding ","offensive ","nighttime ","startling ","slap happy ","disturbing ","adulterous ","blathering ","flickering ","rebellious ","impertinent ","bull headed ","hyperactive ","infuriating ","outnumbered ","pea-brained ","territorial ","underhanded ","zombie like ","mischievous ","at-the-ready ","free-loading ","house-broken ","up-to-no-good ","cruel-hearted ","misunderstood ","narrow-minded ","self-absorbed ","bat-shit-crazy ","fiercely-loyal ","out-of-control ","fear-inspiring ","bat shit crazy ","mentally impaired ", "flying ", "boating ", "star-gazing ", "zoned-out ", "rank ", "clogged ", "salty "];
    var index = getRandomInt(0, adjectiveList.length);
    var word = adjectiveList[index];
    return capitalizeFirstLetter(word);
}

function getRandomNoun () {
    var nounList = ["Aardvark","Aardwolf","African buffalo","African elephant","African leopard","Albatross","Alligator","Alpaca","American buffalo","American robin","Amphibian","Anaconda","Angelfish","Anglerfish","Ant","Anteater","Antelope","Antlion","Ape","Aphid","Arabian leopard","Arctic Fox","Arctic Wolf","Armadillo","Arrow crab","Asp","Ass","Baboon","Badger","Bald eagle","Bandicoot","Barnacle","Barracuda","Basilisk","Bass","Bat","Beaked whale","Bear","Beaver","Bedbug","Bee","Beetle","Bird","Bison","Blackbird","Black panther","Black widow spider","Blue bird","Blue jay","Blue whale","Boa","Boar","Bobcat","Bobolink","Bonobo","Booby","Box jellyfish","Bovid","Buffalo","Bug","Butterfly","Buzzard","Camel","Canid","Cape buffalo","Capybara","Cardinal","Caribou","Carp","Cat","Catshark","Caterpillar","Catfish","Cattle","Centipede","Cephalopod","Chameleon","Cheetah","Chickadee","Chicken","Chimpanzee","Chinchilla","Chipmunk","Clam","Clownfish","Cobra","Cockroach","Cod","Condor","Constrictor","Coral","Cougar","Cow","Coyote","Crab","Crane","Crane fly","Crawdad","Crayfish","Cricket","Crocodile","Crow","Cuckoo","Cicada","Damselfly","Deer","Dingo","Dinosaur","Dog","Dolphin","Donkey","Dormouse","Dove","Dragonfly","Dragon","Duck","Dung beetle","Eagle","Earthworm","Earwig","Echidna","Eel","Egret","Elephant","Elephant seal","Elk","Emu","English pointer","Ermine","Falcon","Ferret","Finch","Firefly","Fish","Flamingo","Flea","Fly","Flyingfish","Fowl","Fox","Frog","Fruit bat","Gamefowl","Galliform","Gazelle","Gecko","Gerbil","Giant panda","Giant squid","Gibbon","Gila monster","Giraffe","Goat","Goldfish","Goose","Gopher","Gorilla","Grasshopper","Great blue heron","Great white shark","Grizzly bear","Ground shark","Ground sloth","Grouse","Guan","Guanaco","Guineafowl","Guinea pig","Gull","Guppy","Haddock","Halibut","Hammerhead shark","Hamster","Hare","Harrier","Hawk","Hedgehog","Hermit crab","Heron","Herring","Hippopotamus","Hookworm","Hornet","Horse","Hoverfly","Hummingbird","Humpback whale","Hyena","Iguana","Impala","Irukandji jellyfish","Jackal","Jaguar","Jay","Jellyfish","Junglefowl","Jacana","Kangaroo","Kangaroo mouse","Kangaroo rat","Kingfisher","Kite","Kiwi","Koala","Koi","Komodo dragon","Krill","Ladybug","Lamprey","Landfowl","Land snail","Lark","Leech","Lemming","Lemur","Leopard","Leopon","Limpet","Lion","Lizard","Llama","Lobster","Locust","Loon","Louse","Lungfish","Lynx","Macaw","Mackerel","Magpie","Mammal","Manatee","Mandrill","Manta ray","Marlin","Marmoset","Marmot","Marsupial","Marten","Mastodon","Meadowlark","Meerkat","Mink","Minnow","Mite","Mockingbird","Mole","Mollusk","Mongoose","Monitor lizard","Monkey","Moose","Mosquito","Moth","Mountain goat","Mouse","Mule","Muskox","Narwhal","Newt","New World quail","Nightingale","Ocelot","Octopus","Old World quail","Opossum","Orangutan","Orca","Ostrich","Otter","Owl","Ox","Panda","Panther","Panthera hybrid","Parakeet","Parrot","Parrotfish","Partridge","Peacock","Peafowl","Pelican","Penguin","Perch","Peregrine falcon","Pheasant","Pig","Pigeon","Pike","Pilot whale","Pinniped","Piranha","Planarian","Platypus","Polar bear","Pony","Porcupine","Porpoise","Portuguese man o' war","Possum","Prairie dog","Prawn","Praying mantis","Primate","Ptarmigan","Puffin","Puma","Python","Quail","Quelea","Quokka","Rabbit ","Raccoon","Rainbow trout","Rat","Rattlesnake","Raven","Ray","Red panda","Reindeer","Reptile","Rhinoceros","Right whale","Roadrunner","Rodent","Rook","Rooster","Roundworm","Saber-toothed cat","Sailfish","Salamander","Salmon","Sawfish","Scale insect","Scallop","Scorpion","Seahorse","Sea lion","Sea slug","Sea snail","Shark ","Sheep ","Shrew","Shrimp","Silkworm","Silverfish","Skink","Skunk","Sloth","Slug","Smelt","Snail","Snake","Snipe","Snow leopard","Sockeye salmon","Sole","Sparrow","Sperm whale","Spider","Spider monkey","Spoonbill","Squid","Squirrel","Starfish","Star-nosed mole","Steelhead trout","Stingray","Stoat","Stork","Sturgeon","Sugar glider","Swallow","Swan","Swift","Swordfish","Swordtail","Tahr","Takin","Tapir","Tarantula","Tarsier","Tasmanian devil","Termite","Tern","Thrush","Tick","Tiger","Tiger shark","Tiglon","Toad","Tortoise","Toucan","Trapdoor spider","Tree frog","Trout","Tuna","Turkey ","Turtle","Tyrannosaurus","Urial","Vampire bat","Vampire squid","Vicuna","Viper","Vole","Vulture","Wallaby","Walrus","Wasp","Warbler","Water Boa","Water buffalo","Weasel","Whale","Whippet","Whitefish","Whooping crane","Wildcat","Wildebeest","Wildfowl","Wolf","Wolverine","Wombat","Woodpecker","Worm","Wren","Xerinae","X-ray fish","cooking sherry","stick butter","rocky road ice cream","cake batter","coffee","tea","drink of water","soda","hot chocolate","cafe mocha latte ","locally brewed beer","wine","cappuccino","Jell-O","nougats","lamb chops","steaks","chowder","fish soup","spaghetti","lobster","sushi","fondue","crabs legs","shrimp","garlic","onions","Bratwurst","kielbasa","pate de foie gras","head cheese","hot dog","hamburger","heirloom tomato","herbs","grains","legumes","zampone","casserole","black beans","pumpkin seeds","stew","cereal","polenta","pudding","pasta","macaroni","ravioli","wafer","crackers","cookies","sandwich","gyro","wrap","omelet","popcorn","walnuts","nuts","almonds","strawberries","blueberries","raspberries","blackberries","dessert menu","pizza","chocolate mousse","creme brulee","cakes","pancake","waffles","French toast","rock candy","baked Alaska","eye","eyeball","eyelids","eyelashes","eyebrows","belly","tummy","rear end","butt","butthole","crotch","penis","vagina","labia","pubic hair","pube","clitoris","abdomen","beard","mustache","sideburns","fingernail","hand","forearm","arm","knuckles","thumb","wrist","elbow","leg","toes","knee","ankle","shin","thigh","hip","breast","boob","chest","torso","tongue","lips","gums","mouth","teeth","bones","spine","throat","lungs","kidneys","intestines","colon","gall bladder","spleen","glands","blood","head","skull","brain","muscles","red blisters","curly hair","xylophone","clavier","virginal","lute","drum","French Horn","English Horn","piano","violin","cello","guitar","flute","tuba","harp","mariachi","orchestra","oboe","bassoon","woodwinds","brass","viola","kettle drum","peyote drum","tambourine","tambour","xylophone","saxophone","marimba","maracas","glockenspiel","shofar","cymbals","kazoo","baby grand piano","dulcimer","harpsichord","accordion","lyre","fiddle","banjo","ukulele","bagpipes","piccolo","clarinet","bugle alpenhorn","panpipe","woofers","senator","governor","representative","councilman","councilwoman","congressman","congresswoman","tennis coach","detective","sleuth","trooper","musician","accompanist","instrumentalist","concert pianist","maestro","conductor","composer","singer","architect","physician","photographer","stage manager","usher","song-and-dance-man","painter","model","designer","dinner guest","attorney","lawyer","judge","mayor","city council","therapist","school teacher","school principal","professor","orator","philosopher","psychologist","man","woman","teen","child","mother","father","grandmother","grandfather","sister","brother","uncle","aunt","son","daughter","in-laws","boy","girl","nurse","sibling","settler","pioneer","waiter","hostess","host","cashier","attendant","publisher","proof-reader","agent","witch","warlock","ghost","knight","prince","princess","maiden","fairy godmother","sky","forest","Heaven","Hell","earth","sun","stars","planets","outer space","town","village","city","country","farm","suburb","road","streets","city blocks","zoo","park","museum","cemetery","tunnels","caves","churches","temples","mosques","supermarket","mall","artichokes","leeks","lettuce","eggplants","zucchini","squash","pumpkin","cauliflower","cabbage","peppers","onions","elephant garlic","man meat","jazz hands","flightless birds","pictures of boobs","Viagra","self-loathing","abs","balanced breakfast","George W. Bush","cuddling","egg","Pope","Aaron Burr","genital piercings","fingering","bleached asshole","science","elderly Japanese men","same-sex ice dancing","William Shatner","Nickelback","Tom Cruise","placenta","Arnold Schwarzenegger","goblins","foreskin","falcon with a cap on its head","pillow fights","hat","Sean Penn","handjob","micropenis","raptor","agriculture","Vikings","humps","geese","bling","glue","sexting","sunshine and rainbows","Count Chocula","Skeletor","sausage festival","emotions","farting and walking away","Chinese gymnastics team","human combustion","yeast","voicemail","Dick Cheney","white people","penis envy","sperm whales","panda sex","catapults","masturbation","natural selection","opposable thumbs","figgy pudding","Gandhi","Five-Dollar Footlongs","Christopher Walken","friction","balls","dental dams","can of whoop-ass","authentic Mexican cuisine.","Genghis Khan","pixelated bukkake","friends with benefits","Tempur-Pedic Swedish Sleep System","take-backsies","RoboCop","Keanu Reeves","heat death of the universe.","folly of man","fiery poops","edible underpants.","Britney Spears at 55.","all-you-can-eat shrimp for $4.99","Fancy Feast","motherfucking sorcerer.","pulling out","passive-agression","nipple","assless chaps","full frontal nudity.","Hulk Hogan","Natalie Portman","Sean Connery","saxophone solos","gloryholes","Darth Vader","Hot Pockets","time travel paradox.","milk man","world peace","surprise","Robert Downey, Jr","sniff","taint","grundle","fleshy fun-bridge","free samples","Republicans","explosions","Michelle Obama's arms","attitude","Sarah Palin","Ubermensch","altar boys","soul","sex life","Pabst Blue Ribbon","Domino's Oreo Dessert Pizza","snapping turtle biting the tip of your penis.","foreplay","collection of high-tech sex toys","middle-aged man on roller skates","bitches","Bill Nye the Science Guy","Italians","Adderall","crippling debt","stray pube","prancing","kidney stone","puppies!","bees?","frolicking.","repression.","road head.","bag of magic beans","boob job","public ridicule","mating display","mouth herpes","overcompensation","fire","Slinkys","genitals","oral sex","lactation","Shaquille O'Neal\'s acting career","hope","8 oz. of sweet Mexican black-tar heroin","winking at old people","Justin Bieber","doin\' it in the butt","lifetime of sadness","Hamburglar","wooping","classist undertones","New Age music","Kool-Aid Man","mess","tentacle porn","lumberjack fantasies","scientology.","estrogen","GoGurt","Judge Judy","dick fingers","surprise sex!","fart","Oompa-Loompas","fetus","obesity","sideboob","people","BATMAN!!!","antelope","sexual tension","third base","racially-biased SAT questions","porn stars","Super Soaker full of cat pee","puberty","birthday party","erection that lasts longer than four hours","White privilege","boner","wifely duties","queef","butt wipe","golden showers","Barack Obama","Nazis","mongoloid","M. Night Shyamalan plot twist","mouthwash","Lunchables","women in yogurt commercials","John Wilkes Booth","powerful thighs","Mr. Clean, right behind you","cybernetic enhancements","serfdom","Kanye West","women\'s suffrage","children on leashes","Harry Potter erotica","dance of the Sugar Plum Fairy","testicle","parting the Red Sea","Amish","child beauty pageants","AXE Body Spray","centaurs","grandma","miracle of childbirth","finger painting","monkey smoking a cigar","Make-A-Wish Foundation","anal beads","force","Kamikaze pilots","dry heaving","listening","ghosts","Hustle","peeing","vampire movie","shapeshifters","Care Bear Stare","hot cheese","zoo lion","defective condom","teenage pregnancy","Bop It","laser hair removal accidents","boogers","soup","Morgan Freeman's voice","Nickelodeon","sex snakes","meaning of Christmas","Pac-Man","homoerotic volleyball montage","crystal meth","male enhancement","Post-it notes","inappropriate yodeling","Lady Gaga","Little Engine That Could","vigilante justice","death ray","life choices","caress of the inner thigh","embryonic stem cells","Nicolas Cage","squealing hog","chronic","erectile dysfunction","home video of Oprah","Lean Cuisine","bucket of fish heads","subscription to Men\'s Fitness","micropig wearing a tiny raincoat and booties","used panties","tribe of warrior women","penny whistle solo from \"My Heart Will Go On.\"","lollipop","Hutus and Tutsis","consensual sex","Queen Elizabeth II","funky fresh rhymes","seduction","black man","evidence","light of a billion suns","wet dreams","synergistic management solutions","pair","silence","poopy diapers","studio audience","nerd","Stalin","rehab","monkey suit","uppercut","shiny objects","menstrual rage","bitch slap","Mormon Tabernacle Choir","female orgasm","Boy Scouts of America","Stormtroopers","virgin", "ejaculate", "baked potato", "lubricant"];
    var index = getRandomInt(0, nounList.length);
    var word = nounList[index];
    return capitalizeFirstLetter(word);
}

var wordPairButton = document.getElementById("wordPairButton");
wordPairButton.addEventListener("click", changeWords); 
window.addEventListener("load", changeWords);