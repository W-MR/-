# git的操作指令



## 设置用户名及邮箱

**用户名**

`global`全局设置

```shell
git config --global user.name '用户名'
```

**邮箱**

```shell
git config --global user.email '邮箱'
```

## **初始化**

会生成一个隐藏文件夹`git`，来初始化我们的环境

```shell
git init
```

## **查看当前目录文件**

```shell
ls  #只能查看到当前目录显示的文件
ls -a  #能够查看当亲目录下所有的文件夹（包括隐藏的）a----all所有
```

## **创建文件夹**

```shell
mkdir 文件夹名
```

## **创建文件**

```shell
touch 文件名
```

## **查看文件内容**

```shell
cat 文件名
```

## **编辑文件**

```shell
vim 文件名
#进入编辑的文件后按 i 键进行编辑
#编辑完毕后按	ESC 再按 shift+: 输入 wq 进行退出并保存 注意 :(冒号是英文冒号)
```

## **清理全屏**

```shell
clear
```

## **将工作区文件上传至暂存区**

```shell
git add 文件名   #上传当文件
git add .    #上传所有的文件
```

## **查看暂存区的文件**

```shell
git status
```

## **将文件从暂存区删除**

```shell
git rm --cached 文件名
```

## 将文件从暂存区提交到本地库

```shell
git commit --m '对本次提交的描述' 文件名
git commit --m '对本次提交的描述'   #暂存区所有的文件
```

## **查看提交的历史记录**

```shell
git log
```

## **退回上一次提交的版本（工作区）**

同时也会将工作区文件中的内容退回指定的版本并且会在历史记录中撤销

`会直接从本地库回退到工作区`

不建议在工作时使用

```shell
git reset --hard HEAD^   # ^退一个版本  ^^回退上上一次的版本 等价于 ~2
git reset --hard 对应的版本标识符 #退回指定的版本
```

## **退回上一次的提交版本（工作区）**

会将工作区的内容退回指定的版本，并且会在历史记录中产生记录

```shell
git revert HEAD
```

## 查看本地库所有的操作记录**

```shell
git reflog
```

## **回退上一次提交的版本（暂存区）**

不会影响工作区的内容

```shell
git reset --soft HEAD^  #退回到暂存区，可以重写注释
```

## **创建分支**

```shell
git branch  #查看分支
git branch 分支名  #创建分支
```

## **查看分支**

```shell
git branch -a
```

## **切换分支**

```shell
git checkout 分支名
```

## **合并分支**

```shell
git merge 分支名  #在主分支上进行合并
```

## **删除分支**

删除分支后不会影响已合并的内容

```
git branch -d 分支名
```

## **分支合并冲突**

场景：当我们在主分支修改了文件A，在其他分支修改了同样的文件A内容，主分支上传后是新的版本，而我们的其他分支并没有因为主分支的而改变了文件A内容，这时我们在其他分支也改变了A这个文件，在与主分支进行合并时，会造成分支的冲突，这时需要我们手动去合并该文件



##  **github建立远程连接**

```shell
git remote add origin 仓库地址  #origin是以后操作仓库时用来代替仓库地址的别名，也可以起别的名
```

## **查看连接的远程仓库信息**

```shell
git remote -v
```

##  **删除与远程仓库的连接**

```shell
git remote remove 地址别名
```

## **向远程仓库推送文件**

```shell
git push 仓库别名 推送的分支
#示例：
git push origin master:master  #将本地的主分支推向远程仓库的主分支可以简写为一个master
```

## **设置默认推送的分支**

```shell
git push -u 地址别名 推送的分支
#设置好后可以直接使用
git push
```

## **拉取远程仓库文件合并至本地仓库**

```shell
git pull 地址别名 分支名
#拉取内容会与本地进行合并并更新
```

## **拉取整个项目至本地**

```shell
git clone 仓库地址  #拉取整个项目，pull可以理解为拉取远程仓库的内容并于本地的文件进行更新
```

## **修改远程推送的默认分支**

```shell
git branch --set-upstream-to=地址别名/远程仓库分支名
```

## **取消之前的默认分支**

```shell
git branch --unset-upstream 之前设置的远程默认分支
```

## **删除远程分支**

```shell
git branch -delete 地址别名 远程仓库分支名
```

## **拉取远程仓库文件到本地仓库但不合并**

```shell
git fetch 本地分支名
```

## **查看本地分支与远程分支的差异**

```shell
git diff master 
```

## **更新远程仓库新建分支**

```shell
git remote update origin --prune
```





































