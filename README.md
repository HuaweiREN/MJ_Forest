# MJ_Forest

Achievement: Wechat Mini-game Top 20 teams (out of 644 teams in total)  
Platform: WeChat Mini-game  
Engine: Cocos Creator 2.2.2  
Language: Node.js  
Author: RHW, JZR  
Email: ravidren@126.com  

Introduction
====
MJ_forest is a WeChat Mini-game with round-based strategy and education experience. 

In this mini-game, the player target at utilizing different methods to collect the resources (food & gold) as much as possible. The resources are again can be used to “gamble” with other players in an open market, or to grow up their pets. A higher level pet would bring back better talents and earn more feedbacks via pet’s activity. All the players would be ranked through their pets’ level and experience.  

The whole game is a metaphor to people’s daily life. Somehow we are using our resources to earn our individual/family a better living environment. Furthermore, parts of them are eager to be outstanding, which means either they would have massy resources, or they would make themselves / their children being the best among the living circle. Thus, if we make a projection to this mini-game, we will find that the resources (in reality) are pointing at the food/gold (in game). They or their children (in reality) are pointing at the pet level and experience (in game).  

The mini-game has 3 major systems and 10+ minor subsystems.  
**The major systems include:**  
* A demand-supply equilibrium model,  
* An activity-feedback close loop,  
* AI (with DQN loaded) robot model.  

**The minor subsystems include:**  
* A “bank” (where player can deposit and withdraw their gold to gain interest)
* A “barn” (where player can get their harvest day award)
* A news station (where player can listen to the daily news broadcast which are indicating the resources tendency)
* An underground market (where player can trade their resources within friend circle rather than put them into the world trade pool)
* A welfare system (where player can get some resources welfare if they meet some specific requirements)
* A calendar system (where there is a time projection between the real time and the game time)
* A user task system (where player are able to get extra resources after finishing some specific tasks)
* A pet dictionary system (where all the pets introduction and talents are listed)
* A rank system (where player can check their rank in the friend circle or the whole game world)
* A feeding system (where player can grow up their pets)
* A live bell system (where player can shake the live bell and increase the pet liveness)
* An activity system (where player can assign the activities to their pets and if the activity has been finished successfully, the pet would bring back extra resources)  

Demand-supply equilibrium model
====

In this part, a player is led to an open market where all the players (not only the human player but also the AI bots) are involved. Player are free to invest their resources (gold or food) into a trade pool. When the time approaches to the round ending, the open market would also freeze. The game console would calculate the resources price, according to the amount of gold and food invested into the trade pool, and re-allocate the resources to the players based on the round price calculated.  
The formulas used in trade demand-supply model are:  



From those formulas we observed that the price is actually decided by the market tendency, rather than the game administrator, which behaves like a mirror to the real economy in our life. In order to better predict the tendency of the food price, the player probably also would like to refer to the history price and the dynamic price. Hence, the model also has an output to User Interface which indicates the history price in last 5 rounds, as well as the dynamic price.  

Generally speaking, the whole demand-supply equilibrium model follows the data transfer flow shown below:  



Activity-feedback close loop
====
A good game is to give player sufficient positive feedback and further stimulate player a continuous enthusiasm on it. Therefore, a positive feedback close loop is always necessary and useful to set up a benign gaming environment. In MJ_forest, when the user gain some good resources, the way to consume them is to feed their pets. It seems a good choice so far, but not enough, because the positive feedback given to the player should not only limited to “a higher pet level”, but should extend to a larger scope. Therefore, the pets can be assigned with special activities, e.g. work, farm, interview and sleep.  

Through these activities, the pets can again earn some extra resources to the player. This minor positive feedback can be a supplement to the major one (pet level up). Furthermore, due to the concept of the pet talent, there are some connections between the pet level and the activity feedback as well. If a pet is of a higher level, the talent would be more powerful and useful. By so, more gold/food can be earned with same activity duration.  

Here, the key point is to set up proper values. The values should not be either large or small. If the values are too large, the balance between the supply-demand model and the activity-feedback close loop would be interrupted. Player will be more willing to participate into the close loop rather than touch into the supply-demand model because the model is somehow related to an investment failure however the close loop is always a not-possible-to-loss way. If the values are too small, the positive feedback will be too weak to give player a decent experience.  

Besides, under some quasi-reality simulation, pure activity-feedback system would lead to an observation that most player are intending to spend their time (assuming individual gaming time per day is a constant) on activity-feedback system since it is obvious the easiest way to earn resources. Therefore, it is necessary to come up with an idea to give player restriction on such an easy manner. In MJ_forest, the approach is to introduce a concept, pet liveness. Pet liveness is a parameter attached to pets. If the liveness is large enough to consume an activity (for example, Work activity would consume 60 liveness, out of 100 liveness), they the pet is able to start the activity. If the liveness is smaller than the activity requirement, player have to utilize either use task award, or the live bell to increase pet liveness.  

Generally, the data transfer flow is shown below.



AI robot model
====
Note that this model is currently limited to a python achievement. Await to Node.js integration.  

MJ_forest utilized DQN to train an AI robot in order to make them achieve sufficient ability to handle sophisticated environment with a “wise” solution. The probe way to these AI robot starts from Naïve Bayes, all connected neural networks, convolutional neural network, and DQN. Actually, in the final game BOT set up, there are several Bot variances, including Noob BOT, Naïve Bayes BOT and DQN AI BOT.
The reason introducing AI bot into this mini-game is because the developers on the one hand want to make the game more attractable and on the other hand to avoid human oligarchs existing in the game.  

If no BOT were added to the mini-game, the victory fruit would rapidly lean to those players with massive resources because they can easily dominate the prices in the trade market. In order to solve this problem, there are basically 2 ways:  
* With Marco resources control to the trade market, such as a limit-up & limit-down strategy, but these Marco resources control would also prone to invade player’s free space. If all the players are only playing with these virtual resources, it is not necessary to have a hard limitation to the trade market because even loss can be a stimulation to encourage player pursuing a future gain.
* With mild macro control to the supply-demand model, introduce sufficient BOTs into the game. This would largely resolve the problem that free market would cultivate oligarchs. At the same time, it would not hurt the achievement experience. The result can also be more convincible.  

The reason us developers abandoned the all connected NN and CNN is because on the one hand we do not have sufficient training set to optimize the choices (the human work is quite time-consuming and we evaluated not valuable). It is prone to an overfitting results. On the other hand, there are too many parameters needed to bring into consideration. Most part of them are not Boolean, or not absolute linear distributed in the space. Some parameter vectors are even of internal connections, introducing much noise into forward & backward propagation. We tried to use Principle Component Analysis to reduce the dimension, but again we failed because of the small training set dilemma.  

Finally, DQN was transferred from the cart-pole case. The idea to use DQN to solve cart-pole problem is from the paper below:



By transferring this magic to our case, the AI bots are able to gain some progress out of 3 action resources: human player action, random (noob) bot action and Naïve Bayes bot, with NO supervision, which means that the training set dilemma is also overcome. Please check the formulas shown below, to understand the process better.  
Note that in this case, Naïve Bayes is difficult to get a decent result because in Naïve Bayes we always assume the conditions are perfectly individual to each other. However, in our case, those conditions (for example, the history price and the news positive level) are usually inter-connected. Without a PCA process it is not easy to distinguish and filter them out.  
Hence, here it comes with a general scope on this part and DQN AI robot has reached to a decent performance and await for Node.js integration.  

![image](https://github.com/HuaweiREN/MJ_Forest/blob/master/pics/DQN.PNG)


