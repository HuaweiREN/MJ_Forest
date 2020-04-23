# MJ_forest

Achievement: Wechat Mini-game Top 20 teams (out of 644 teams in total)  
Platform: WeChat Mini-game  
Engine: Cocos Creator 2.2.2  
Language: Node.js  
Author: RHW, JZR  
Email: ravidren@126.com  
For applying internal testing authorization, please use WeChat and scan the QR Code down below.  

<img src="https://github.com/HuaweiREN/MJ_Forest/blob/master/pics/QR%20Code.png" width = "200" alt="" align=center />  

## Introduction

MJ_forest is a WeChat Mini-game with round-based strategy and education experience.  

In this mini-game, the player target at utilizing different methods to collect the resources (food & gold) as much as possible. The resources are again can be used to “gamble” with other players in an open market, or to grow up their pets. A higher level pet would bring back better talents and earn more feedbacks via pet’s activity. All the players would be ranked through their pets’ level and experience.  

The whole game is a metaphor to people’s daily life. Somehow we are using our resources to earn our individual/family a better living environment. Furthermore, parts of them are eager to be outstanding, which means either they would have massy resources, or they would make themselves / their children being the best among the living circle. Thus, if we make a projection to this mini-game, we will find that the resources (in reality) are pointing at the food/gold (in game). They or their children (in reality) are pointing at the pet level and experience (in game).  

The mini-game has 3 major systems and 10+ minor subsystems. 

**The major systems include:**  
- A demand-supply equilibrium model  
- An activity-feedback close loop  
- AI (with DQN loaded) robot model  

**The minor subsystems include:**
-	A “bank” (where player can deposit and withdraw their gold to gain interest)
-	A “barn” (where player can get their harvest day award)
-	A news station (where player can listen to the daily news broadcast which are indicating the resources tendency)
-	An underground market (where player can trade their resources within friend circle rather than put them into the world trade pool)
-	A welfare system (where player can get some resources welfare if they meet some specific requirements)
-	A calendar system (where there is a time projection between the real time and the game time)
-	A user task system (where player are able to get extra resources after finishing some specific tasks)
-	A pet dictionary system (where all the pets introduction and talents are listed)
-	A rank system (where player can check their rank in the friend circle or the whole game world)
-	A feeding system (where player can grow up their pets)
-	A live bell system (where player can shake the live bell and increase the pet liveness)
-	An activity system (where player can assign the activities to their pets and if the activity has been finished successfully, the pet would bring back extra resources)



## Demand-supply equilibrium model

In this part, a player is led to an open market where all the players (not only the human player but also the AI bots) are involved. Player are free to invest their resources (gold or food) into a trade pool. When the time approaches to the round ending, the open market would also freeze. The game console would calculate the resources price, according to the amount of gold and food invested into the trade pool, and re-allocate the resources to the players based on the round price calculated.
The formulas used in trade demand-supply model are:  

![image](https://github.com/HuaweiREN/MJ_Forest/blob/master/pics/formulas_supply_demand_model.PNG)

From those formulas we observed that the price is actually decided by the market tendency, rather than the game administrator, which behaves like a mirror to the real economy in our life. In order to better predict the tendency of the food price, the player probably also would like to refer to the history price and the dynamic price. Hence, the model also has an output to User Interface which indicates the history price in last 5 rounds, as well as the dynamic price.
Generally speaking, the whole demand-supply equilibrium model follows the data transfer flow shown below:  

![image](https://github.com/HuaweiREN/MJ_Forest/blob/master/pics/supply_demand_model.PNG)
 
## Activity-feedback close loop

A good game is to give player sufficient positive feedback and further stimulate player a continuous enthusiasm on it. Therefore, a positive feedback close loop is always necessary and useful to set up a benign gaming environment. In MJ_forest, when the user gain some good resources, the way to consume them is to feed their pets. It seems a good choice so far, but not enough, because the positive feedback given to the player should not only limited to “a higher pet level”, but should extend to a larger scope. Therefore, the pets can be assigned with special activities, e.g. work, farm, interview and sleep.  

Through these activities, the pets can again earn some extra resources to the player. This minor positive feedback can be a supplement to the major one (pet level up). Furthermore, due to the concept of the pet talent, there are some connections between the pet level and the activity feedback as well. If a pet is of a higher level, the talent would be more powerful and useful. By so, more gold/food can be earned with same activity duration.  

Here, the key point is to set up proper values. The values should not be either large or small. If the values are too large, the balance between the supply-demand model and the activity-feedback close loop would be interrupted. Player will be more willing to participate into the close loop rather than touch into the supply-demand model because the model is somehow related to an investment failure however the close loop is always a not-possible-to-loss way. If the values are too small, the positive feedback will be too weak to give player a decent experience.  

Besides, under some quasi-reality simulation, pure activity-feedback system would lead to an observation that most player are intending to spend their time (assuming individual gaming time per day is a constant) on activity-feedback system since it is obvious the easiest way to earn resources. Therefore, it is necessary to come up with an idea to give player restriction on such an easy manner. In MJ_forest, the approach is to introduce a concept, pet liveness. Pet liveness is a parameter attached to pets. If the liveness is large enough to consume an activity (for example, Work activity would consume 60 liveness, out of 100 liveness), they the pet is able to start the activity. If the liveness is smaller than the activity requirement, player have to utilize either use task award, or the live bell to increase pet liveness.  

Generally, the data transfer flow is shown below.

![image](https://github.com/HuaweiREN/MJ_Forest/blob/master/pics/activity_feedback_model.PNG)

## AI robot model

Note that this model is currently limited to a python achievement. Await to Node.js integration.

MJ_forest utilized DQN to train an AI robot in order to make them achieve sufficient ability to handle sophisticated environment with a “wise” solution. The probe way to these AI robot starts from Naïve Bayes, all connected neural networks, convolutional neural network, and DQN. Actually, in the final game BOT set up, there are several Bot variances, including Noob BOT, Naïve Bayes BOT and DQN AI BOT.
The reason introducing AI bot into this mini-game is because the developers on the one hand want to make the game more attractable and on the other hand to avoid human oligarchs existing in the game. 

If no BOT were added to the mini-game, the victory fruit would rapidly lean to those players with massive resources because they can easily dominate the prices in the trade market. In order to solve this problem, there are basically 2 ways:

- With Marco resources control to the trade market, such as a limit-up & limit-down strategy, but these Marco resources control would also prone to invade player’s free space. If all the players are only playing with these virtual resources, it is not necessary to have a hard limitation to the trade market because even loss can be a stimulation to encourage player pursuing a future gain.
- With mild macro control to the supply-demand model, introduce sufficient BOTs into the game. This would largely resolve the problem that free market would cultivate oligarchs. At the same time, it would not hurt the achievement experience. The result can also be more convincible.

The reason us developers abandoned the all connected NN and CNN is because on the one hand we do not have sufficient training set to optimize the choices (the human work is quite time-consuming and we evaluated not valuable). It is prone to an overfitting results. On the other hand, there are too many parameters needed to bring into consideration. Most part of them are not Boolean, or not absolute linear distributed in the space. Some parameter vectors are even of internal connections, introducing much noise into forward & backward propagation. We tried to use Principle Component Analysis to reduce the dimension, but again we failed because of the small training set dilemma.

Finally, DQN was transferred from the cart-pole case. The idea to use DQN to solve cart-pole problem is from the paper below:

![image](https://github.com/HuaweiREN/MJ_Forest/blob/master/pics/DQN.PNG)

By transferring this magic to our case, the AI bots are able to gain some progress out of 3 action resources: human player action, random (noob) bot action and Naïve Bayes bot, with NO supervision, which means that the training set dilemma is also overcome. Please check the formulas shown below, to understand the process better.

Note that in this case, Naïve Bayes is difficult to get a decent result because in Naïve Bayes we always assume the conditions are perfectly individual to each other. However in our case, those conditions (for example, the history price and the news positive level) are usually inter-connected. Without a PCA process it is not easy to distinguish and filter them out.

Hence, here it comes with a general scope on this part and DQN AI robot has reached to a decent performance and await for Node.js integration.

## Game Bank

The bank system in this game behaves like a supplement institution to the supply-demand model. Those player who are not willing to bet on trade tendency are prone to store their gold resources here because they can also make some fortune in the bank system.
There are typically 3 actions the player can make in the bank system, including deposit, withdraw and get interest. The formula calculating these values are:  

![image](https://github.com/HuaweiREN/MJ_Forest/blob/master/pics/formulas_game_bank.PNG)

Note that the interest rate has to be fetched round by round, rather than automatically added to the deposit volume. This strategy maintains the game entertain but obviously is against with the ground truth in real life.  

Also note that the interest rate is a variant under the control of game central information station. Briefly, this variant depends on the news station tendency. Also, if the game info station detects that more and more play are willing to put their gold in the bank and earn the interest, rather than invest them into the trade market, some special cases can happen affecting the interest rate even to negative. If we project this to the reality, it is similar to “bank broken”.


## Game Barn

The role of game barn is quite similar to the game bank’s but with the resources “food” rather than the gold. Here player cannot store their food anymore but to receive some food feedback directly, called “harvest day feedback”. There is a fixed period of the harvest day readiness. In MJ_forest, the period is set to 24 hours, which means it is like a daily award to the player where they can enter the game barn and get their daily harvest day award per day.

Different from the gold interest, the harvest day feedback would be reserved continuously until the period is updated, which means even if a player didn’t get the food resources now, they can still get it in next hour.


## News Station

In this game, it is not only the player themselves and the bots (numb, Bayes and DQN) are deciding the price in the trade market, but also the game information center. Therefore, the news station is a game institution where the player can get enough information from. 
For example, if the interest rate is going to downhill with 1% (coordinated by the game info center), the news station would broadcast the daily news like “today the interest rate is going to downhill”, without the specific value. By doing so, player are able to gain some information from news station and avoid the resources loss, and vice versa.

Besides, the news station is also able to broadcast game hints now and then. It is a good opportunity as well for player to read tutorials.

There are actually 3 levels of news. 
- Game hints. They are mostly appearing on daily news. The game hints include the detailed explanation on the supply-demand model, the activity-feedback model and also the knowledge about the AI bots.  
-	Weak tendency indication. There will be some useful information in news station now and then, which are helpful for player to gain more resources / lose less resources. The appearing frequency is about 10% (without pet interview activity) and 100% (with pet interview activity)  
-	Strong tendency indication. There will be some quite useful information in news station where the detailed tendency would be directly revealed to the player. With these information, the player will be quite easy to earn extra fortune, for example “there will be a huge amount of gold flow (100,000 gold) into the trade market” will lead player invest more food into the trade market under current round.
The way the game is set like this is also because the developers want to have a full projection from the game to our reality. We are always willing to know more information in order to make ourselves benefitted by the special investments. We are more or less affected by the news we absorbed and the phenomenon we observed day by day.

## Underground market
The concept of underground market is together come up with the trade market. In trade market, player are only allowed to put their resources in an open market, and get the feedback from the open market as well. However, player are not able to trade with their friends.  

In order to bring more entertain to the game and to strength the sociality to the game, the developers introduce the underground market. In the underground market, people are allow to raise a trade bill to their specific friends, or even to the whole friend circle. 
There are mainly 2 advantages with this idea.  

- Player would have more space to manage their resources and more opportunities to communicate with their gaming friends.
- It is beneficial to the game environment because it invisibly brings widely chance to introduce new players into the game.

Due to the limitation and the privacy protection policy of WeChat friend circle, the developers are not able to get the detailed information of an individual player. Thus, the player has to share the game info to their friends on their own, or they should make their trade scheme public. Either way is a blind box to developers, so player should not worry about a privacy leak problem.
In MJ_forest game code uploaded in April version, the underground market feature is not included because of the tight developing timing. Will have README.md updated once the feature has been successfully loaded.  

## Welfare System
The welfare system is also a part of positive feedback award to player. With welfare system, player are able to get some extra food & gold resources, if their hold volume locates in a specific boundary. Currently, the developers set the boundary as “last 30%” of the whole player group. This idea is also easy to understand by the pictures shown below.  

![image](https://github.com/HuaweiREN/MJ_Forest/blob/master/pics/foodWelfare.png)  

![image](https://github.com/HuaweiREN/MJ_Forest/blob/master/pics/goldWelfare.png)  

In summary, the welfare system indicates a signal to all player that “the more you spend, the larger opportunity you will get some extra awards”. It is also a test to player’s strategy. If you want to earn this amount of award, you have to find some way spend your fortune.

## Calendar System
The calendar system is designed to project the game time with a fixed relationship to the reality. The reason why the developers not using the real time is because they want to speed up the game round update.  

The projection detail is shown below:  
- 1 game second = 1 nature second
- 1 game minute = 1 nature minute
- 60 game minute = 1 game day = 1 nature hour
- 24 game day = 1 game month =1 nature day
- 30/31 game month = 1 game year = 1 nature month

## User Task System
The user task system is aiming at providing some extra resources to player. With some simple tasks, player are able to get food, gold and pet liveness.

The algorithm to detect whether a player has finished the tasks is “code match”. Once the player executed some actions related to the tasks, the system will automatically record a password-like code, and to compare with the task code stored in server. If the two codes match to each other, the award status will turn to “ready”.

For each nature day, user would have 3 tasks awaiting to finish. All the tasks will be refreshed at the beginning of the next day.

## Pet Dictionary System

In the internal testing version, play are free to change their pet type. There are four variances now in the game system. Each of them has a unique talent. With the level-up, the pet talent would also be stronger and stronger. The introduction is shown below:  
- A: The liveness decrease would be slower than the regular consumption.  
- B: The gold earned in the work activity would be more than the regular value.
- C: The news activity would probably bring extra news.
- D: The gold earned in the work activity would be more than the regular value.

Note that the talent value is not revealed until the pet level reaches to a specific level.

## Rank System

The rank system is also very important to this game because for example, welfare systems are depending on the resources each player owns. Therefore, if a player wants to earn gold & food welfare successfully, they have to come up with a strategy to maintain their hold volume less / fewer than a specific value, comparing with the whole player group. Here, the rank system is the only one and the most important one to take as a reference.

In the game there are multiple resource properties a player has to take care of: gold, food, pet level and pet exp. Accordingly, there will be at least 6 rank list to each player, which are:  
- Top 20 game world pet level rank players: sorted by pet rank
- Top 20 game world gold rank players: sorted by gold volume (hold volume + deposit)
- Top 20 game world food rank players: sorted by food volume
- Friend circle pet level rank players: sorted by pet rank
- Friend circle gold rank players: sorted by gold volume (hold volume + deposit)
- Friend circle food rank players: sorted by food volume  

For each item in the rank list, we have a couple of parameters to convey useful information to the player, including: pet level, pet exp, pet liveness, pet type, gold resources, food resources and the last but the most important, rank.


## Feeding System

In order to convey direct positive feedback to player, feeding system is added in the main view. Player are not allowed to upgrade their pet multiple levels with one click because the developers do think level-by-level mode brings more joy in the game.

## Live Bell System

Live bell system is aiming at bringing player a quick path to restore pet liveness. The frequency set by developers in the game is 20 times / hour, with 2 liveness increment.

## Activity System

The activity system is to make pets become more useful and bring more positive feedback to the players. The activity details are shown below.
